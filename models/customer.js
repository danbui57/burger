module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        customer: {
            type: DataTypes.STRING,
            //if a customer is to be created, they must have a name
            allowNull: false
        }
    });
    return Customer;
}