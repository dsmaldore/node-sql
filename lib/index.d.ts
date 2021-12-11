export declare class Database {
constructor(host: string, 
    user: string,
    password: string,
    database: string,
    port?: number,
    waitForConnections?: boolean,
    connectionLimit?: number,
    queueLimit?: number,
    debug?: boolean); 

    checkConnection(): Promise<boolean>;
    query(sql: string, values: any): Promise<mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader>
    closePool(): Promise<void>;
}

export interface Column {
    type: string,
    allowNull?: boolean,
    isPrimaryKey?: boolean,
    references?: string,
    isUnique?: boolean,
    default?: boolean,
    autoIncrement?: boolean,
}

export interface Schema {
    [x: string]: Column, 
}

export interface findArgs {
    limit: number, 
    page: number, 
    order: string, 
    orderby: string
}

export declare class Table {
    constructor(database: typeof Database, name: string, schema: Schema, defaultFindArgs: findArgs);
    find(arg?: findArgs): Promise<typeof Schema[]>;
    findWhere(key: string, value: any, operator?: string): Promise<typeof Schema[]>; 
    findOne(id: number): Promise<typeof Schema>; 
    findOneBy(key: string, value: any): Promise<typeof Schema>; 
    create(obj: any): Promise<typeof Schema>; 
    updateOne(id: number, obj: any): Promise<typeof Schema>;
    updateOneBy(key: string, value: any, obj: any): Promise<typeof Schema>;
    deleteOne(id: number): Promise<boolean>;
    deleteOneBy(key: string, value: any): Promise<boolean>;
    deleteOneByWhere(key1: string, value1: any, key2: string, value2: any): Promise<boolean>;
    
}

