class backpack{
    constructor(
        name,
        volumn,
        color,
        pocketnum,
        straplengthL,
        straplengthR,
        lidOpen
    ){
        this.name=name,
        this.color=color,
        this.volumn=volumn,
        this.pocketnum=pocketnum,
        this.strapLength={
            left:straplengthL,
            right:straplengthR,
        };
        this.lidOpen=lidOpen;
    }
    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    newStraplength(lengthleft, lengthright){
        this.strapLength.left=lengthleft;
        this.strapLength.right=lengthright;
    }      
}
export default backpack;