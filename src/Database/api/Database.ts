interface Database {
    create(object: any);

    read(object: any, callBack: any);

    update(object: any);

    delete(object: any);
}