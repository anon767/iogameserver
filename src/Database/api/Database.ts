interface Database {
    create(id: any, object: any);

    read(id: any, callBack: any);

    update(id: any, object: any);

    delete(id: any);

    getAllBy(key: any, callBack: any);
}