export function toTree(data:any,pkey:string,ckey:string){
        const cloneData = JSON.parse(JSON.stringify(data))    // 对源数据深度克隆
        const tree = cloneData.filter((father:any)=>{              //循环所有项
        const branchArr = cloneData.filter((child:any)=>{
            return father[pkey] == child[ckey];//返回每一项的子级数组
        });
        if(branchArr.length>0){
            father.children = branchArr; //如果存在子级，则给父级添加一个children属性，并赋值
        }
        return father[ckey]==0;//返回第一层
    });
    return tree;    //返回树形数据
}