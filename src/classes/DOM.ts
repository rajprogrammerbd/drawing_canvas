interface ExistanceOptionType {
    isId?: true,
    isClass?: true,
    isTag?: true
}

interface ExtendedDeleteMethod {
    remove: () => void;
}

export default class DOM {
    protected elementExistence(tagName: string, options: ExistanceOptionType): boolean {
        let element1: HTMLElement | null = null;
        let element2: HTMLCollectionOf<HTMLElement> | null = null;
        
        if ((options.isClass && options.isId && options.isTag) || (options.isId && options.isTag) || (options.isClass && options.isId) || (options.isId && options.isTag) || (options.isClass && options.isTag)) {
            throw new Error('only one can be selected');
        }

        if (options.isId) {
            element1 = <HTMLElement>document.getElementById(tagName);
        }

        if (options.isClass) {
            element2 = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName(tagName);
        }

        if (options.isTag) {
            element2 = <HTMLCollectionOf<HTMLElement>>document.getElementsByTagName(tagName);
        }

        if (element1 || (element2 !== null && element2.length > 0)) {
            return true;
        } else return false;
    }

    protected getElementByTagName<T>(tagName: string): T {
        return <T>document.getElementsByTagName(tagName)[0];
    }

    protected getWindowWidth(): number {
        return window.innerWidth;
    }

    protected getWindowHeight(): number {
        return window.innerHeight;
    }

    protected deleteElement<T extends ExtendedDeleteMethod>(tagName: string, options: ExistanceOptionType): boolean {
        const isExistedElement = this.elementExistence(tagName, options);

        if (isExistedElement) {
            const element = this.getElementByTagName<T>(tagName);

            element.remove();
            return true;
        } else {
            return false;
        }
    }

    protected createCanvas(parentElement?: HTMLElement): HTMLCanvasElement {
        if (this.elementExistence('canvas', { isTag: true })) {
            this.deleteElement('canvas', { isTag: true });
        }
        const canvas = document.createElement('canvas');
        canvas.width = this.getWindowWidth();
        canvas.height = this.getWindowHeight();

        if (parentElement) {
            parentElement.appendChild(canvas);
        } else {
            const body = <HTMLBodyElement>document.getElementsByTagName('body')[0];

            body.appendChild(canvas);
        }

        return canvas;
    }
}