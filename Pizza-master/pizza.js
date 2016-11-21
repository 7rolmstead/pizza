class pizza{
  //type constructor below
  constructor(s,mt,vt){
    this.size = s;
    this.meatToppings = mt;
    this.veggieToppings = vt;
  }


  //type instance functions below
  this.sizeCost = function(){
    if(this.size == "Small";){
      return 7.99;
    }
    else if(this.size == "Medium";){
      return 9.99;
    }
    else if(this.size == "Large";){
      return 12.99;
    }
    else(this.size == "Extra-Large"){
      return 15.99;
    }
  }

  this.toppingCost = function(top){
    if(top == "Meat";){
      return(this.meatTopping.length * .99);
    }
    if(top == "veggie";){
      return(this.veggieTopping.length * .50);
    }
  }

  //type class functions below
  this.price = function(){
    return (this.sizeCost() + this.toppingCost("Meat","Veggie"));
  }

  static promotionalDeal(pizza,percent){
    let percent = 1 - (percent/100);
    return this.price()*percent;
  }

}
