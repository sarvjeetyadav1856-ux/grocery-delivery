const product=require("../models/productModel");
exports.home=(req,res) => {
    res.render("index");
};
exports.showProducts =(req,res)=>{
    res.render("products",{products});
};
exports.addForm=(req,res)=>{
    res.render("add");
};
exports.insertProduct=(req,res)=>{
    const product={
        id:products.length+1,
        name:req.body.name,
        price:req.body.price
    };
    products.push(product);
    res.redirect("/products");
};
exports.editForm=(req,res)=>{
    const product=product.find(
        p=>p.id==req.params.id
    );
    res.render("edit",{product});
};
exports.updateProduct=(res,req)=>{
const product=product.find(
    p=>p.id==req.params.id
);
product.name=req.body.name;
product.price=req.body.price;
res.redirect("/products");
};
exports.deleteProduct=(req,res)=>{
    const index=products.findIndex(
        p=>p.id==req.params.id
    );
    products.splice(index,1);
    res.redirect("/products");
};