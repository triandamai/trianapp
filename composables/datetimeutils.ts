export const useDate =()=>{
    function formatDate(date) {
        return new Date(date).toDateString()
    }
    return{
        formatDate
    }
}