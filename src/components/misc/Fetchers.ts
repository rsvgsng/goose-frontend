interface Subject {
    subs: Object[];
    code:Number;
    documentSubmitted   :boolean;
    
}
const getDocs =async ():Promise<Subject>=>{
    const response = await fetch('http://localhost:8000/api/v1/pubx?action=docs',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
    const data = await response.json();
    return data;

}




export  {
    getDocs



}