module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Burger.hasOne(models.Customer);
      }
    }
  });
  return Burger;
}