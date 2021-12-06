export default {
    aUpdateInfor(context,payload){
        setTimeout(()=>{
            context.commit('updateInfor')
            console.log(payload.message);
            payload.success();
        },1000)
    },
    aUpdateInfor2(context,payload){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                context.commit('updateInfor')
                console.log(payload.message);
                resolve('成功')
            },1000)
        })
    },
}