class CustomContext {
    constructor(value) {
        this.value = value;
    }

    // Provider
    Provider = ({children, value}) => {
        this.value = value;
        return children;
    }

    // Consumer
    Consumer = ({children}) => children(this.value); 
}

function createContext(value = null) {
    const context = new CustomContext(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer

    }
}

export default createContext;