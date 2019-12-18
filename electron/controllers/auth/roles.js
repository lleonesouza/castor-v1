const AccessControl = require('accesscontrol');

let allResource = ['cash', 'transactions', 'items', 'products', 'graphs', 'clients', 'admin']

let roles = {
    admin: {resource: ['video', 'image'], action: 'create:any', attributes: '*'},
    transactions: {resource: ['video', 'image'], action: 'create:any', attributes: '*'},
}

let resource = {
    admin: ['cash', 'transactions', 'items', 'products', 'graphs', 'clients', 'admin']
}

let newUser = {
  role: "",
  resource: ["video"],
  action: "read:any",
  attributes: "*"
};


let grantList = [
    { role: 'admin', ...roles.admin },
    { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },
    { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },

    { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },

    { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },

    { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },

    { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },


    { role: 'admin', resource: 'video', action: 'update:any', attributes: '*' },
    { role: 'admin', resource: 'video', action: 'delete:any', attributes: '*' },
 
    { role: 'user', resource: 'video', action: 'create:own', attributes: '*' },
    { role: 'user', resource: 'video', action: 'read:any', attributes: '*' },
    { role: 'user', resource: 'video', action: 'update:own', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'video', action: 'delete:own', attributes: '*' },

    { role: 'user', resource: 'video', action: 'delete:own', attributes: '*' },
    { role: 'user', resource: 'video', action: 'delete:own', attributes: '*' },
];


const ac = new AccessControl(grantList);

const permission = ac.can('admin').createOwn('image');

console.log(permission.granted);    // —> true

