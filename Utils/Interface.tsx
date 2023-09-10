export interface Login {
    mobile: string;
    passwd: string
}

export interface Header {
    "frond-host": string,
    dev: number,
    version: number,
    "Content-Type": string,
    // token: string
}