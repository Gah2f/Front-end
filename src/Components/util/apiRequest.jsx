const apiRequest =  async (url ='', optionsObj = null, errmesg= null)=>{
try{
const response = await fetch(url, optionsObj);
if (!response.ok) throw Error('Reload the app')
} catch (err){
    errmesg= err.message;
} finally {
    return errmesg;
}
}
export default apiRequest;