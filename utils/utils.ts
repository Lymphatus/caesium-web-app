export enum FILE_STATUS {
    ERROR,
    WAITING,
    COMPRESSING,
    FINISHED
}

export enum COMPRESSION_STATUS {
    WAITING,
    COMPRESSING,
    FINISHED,
    FINISHED_ALL_ERRORS
}

export enum MESSAGE_LEVEL {
    ERROR,
    WARNING,
    INFO,
    SUCCESS
}

export enum COMPRESSION_MODE {
    QUALITY,
    SIZE
}

export interface CImage {
    file: File
    thumbnailUrl: string,
    status: FILE_STATUS
    id: string
    newSize: number
    requestedMaxSize: number,
    errorMessage: string | null
    key: string
    outputImageArray: Uint8Array | null,
}

export interface GeneralMessage {
    level: MESSAGE_LEVEL
    message: string
    visible: boolean
    timeout: number
}

export enum MAX_SIZE_UNIT {
    BYTE = 1,
    KILOBYTE = 1000,
    MEGABYTE = 1000000,
}
