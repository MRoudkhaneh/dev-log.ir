export const Pipe = (...fns: Array<CallableFunction>) =>
    (arg:any) => fns.reduce((p:Promise<[]>, fn:any) => p.then(fn), Promise.resolve(arg));