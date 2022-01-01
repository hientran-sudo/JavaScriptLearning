const backpack = {
    name:"BP1",
    color:"blue",
    weight:20,
    strapLength:{
        left:10,
        right:10,
    },
    lidOpen: false,
    toggleLid: function (lidStatus){
        this.lidOpen = lidStatus;
    },
    newStraplength: function (lengthleft, lengthright){
        this.strapLength.left=lengthleft;
        this.strapLength.right=lengthright;
    },
    newName: function (newname){
        this.name=newname;
    }
};
const markup = (backpack) => {
    return `
    <div>
      <h3>${backpack.name}</h3>
      <ul>
        <li>Volume: ${backpack.volume}</li>
        <li>Color: ${backpack.color}</li>
        <li>Number of pockets: ${backpack.pocketNum}</li>
        <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
      backpack.strapLength.right
    } </li>
        <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
      </ul>
    </div>
  `;
  };
  
console.log("backpack object is: ",backpack);
console.log("color ",backpack.color);
console.log("left before: ", backpack.strapLength.left);
backpack.newStraplength(20,20);
console.log("left after: ", backpack.strapLength.left);
backpack.newName("My Backpack");
console.log("New name is: ", backpack.name);

