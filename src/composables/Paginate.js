
import { computed,ref } from '@vue/reactivity';


export default function paginateUserList(data){

    const page=ref(1)
   
    const pages=ref([]);

    const setPages=()=>{
        for(let i=1 ; i<= data.value.total_pages ; i++){
            pages.value.push(i)
        }
    }
     
    const setParam=(page)=>{
        let param={}
        if(page){
            param['page']=page
        }
        return param
    }
    const entries=computed(()=>{
        let curentries=Math.abs((data.value.page * data.value.per_page)-data.value.per_page)

        return curentries
    })

    const totalEntries=computed(()=>
        data.value.per_page * data.value.total_pages
    ) 

    return{
        page,
        pages,
        totalEntries,
        entries,
        setPages,
        setParam
    }


}