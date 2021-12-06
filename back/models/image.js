module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        src:{
            type: DataTypes.STRING(200), //TEXT는 매우 긴 글
            allowNull:false,
        },
    }, {
        charset:'utf8',
        collate: 'utf8_general_ci',
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
        db.Image.belongsTo(db.Hashtag);
    };
    return Image;
};