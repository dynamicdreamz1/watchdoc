
export const ageCalc=(date)=>{

    var dob = new Date(date);  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    // eslint-disable-next-line no-undef
    return  Math.abs(year - 1970);  
}


export const MetaFormeting=(metadata)=>{
    let userpforle =[];
      // eslint-disable-next-line array-callback-return
      metadata?.meta_data?.map((item,i) =>{
            userpforle[item?.meta_key] =item?.meta_value;
    })

    return userpforle;
}
