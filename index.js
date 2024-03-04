 const pagFunction=async(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/retro-forum/posts`;
    const res= await fetch(url);
    const data=await res.json();
    const posts=data.posts;
    //console.log(posts)
    display(posts);
    commentHandle(posts);
   

 }


 function display(posts){
    const cardcontainer=document.getElementById("card-section");
    cardcontainer.textContent='';

    posts=posts.slice(0,6)
   for(let post of posts){
    //console.log(post)
    //console.log(post)
    const cards=document.createElement("div");
    cards.innerHTML=
    `<div class="card card-compact w-[770px]  shadow-xl p-8">
    <div class="w-full flex justify-start gap-3">
        <div class="w-40  border-spacing-1">
        <img src"${post.image}" class="w-32 h-32  rounded-full">

        </div>
        <div class="w-3/4 pl-8">
            <div class="gap-4">
                <span class="text-base font-medium">${post.category}</span>
                <span class="text-base font-medium pl-4">Author: ${post.author.name}</span>
            </div>
            <div>
                <h1 class="text-xl font-bold py-3">${post.title}</h1>
                <p class="text-base font-normal text-left pr-20">${post.description}</p>
            </div>
            <div class="py-8 border-dotted text-xl">
               
            </div>
            <div class="flex justify-between items-center w-full ">
                <div class=" grid grid-cols-3 gap-3">
                    <div class="flex justify-start gap-3">
                        <span><img src="asset/tabler-icon-message-2.png" alt=""></span>
                        <span>${post.comment_count}</span>
                    </div>
                    <div class="flex justify-start gap-3">
                        <span><img src="asset/Group 16.png" alt=""></span>
                        <span>${post.view_count}</span>
                    </div>
                    <div class="flex justify-start gap-3">
                        <span><img src="asset/Group 18.png" alt=""></span>
                        <span>${post.posted_time}min</span>
                    </div>
                  
                </div>
                <div class="float-end ">
                    <img onclick="commentHandle()" src="asset/Group 40106.png" alt="">

                </div>
            </div>

        </div>
    </div>
</div>

`;
    
    cardcontainer.appendChild(cards)
    
    //console.log(post)
   }
 }

 const searchHandle=()=>{
    const inpuFlied=document.getElementById("search");
    const searchText=inpuFlied.value
    //console.log(searchText)
    //pagFunction(searchText)

 }
 pagFunction()
 function commentHandle (id){
   // console.log(id)
   for(let item of id){
    //console.log(item)
    
   }
    
    



 }

 const lastedPost=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data=await res.json();
    const lastpost=data;
   // console.log(lastpost)    
    posted(lastpost)
 }


 function posted(lastpost){
    const lastedcontent=document.getElementById("lastedcontent");
    for(let lastp of lastpost){
        console.log(lastp) 
      const lastcard=document.createElement("div");   

        lastcard.innerHTML=`
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${lastp.cover_image}" alt="Shoes" /></figure>
        <div class="card-body">
          <div class="flex gap-3">
            <img src="asset/Frame (5).png" alt="">
            <span>${lastp.author.posted_date}</span>
          </div>
          <div class="">
            <span class="font-extrabold text-xl pt-3">${lastp.title}</span>
            <p class="font-normal text-base py-4">${lastp.description}</p>

          </div>
          
          
          <div class="card-actions justify-start gap-3">
            <div class="">
              <img src="${lastp.profile_image}" class="w-16 h-16 rounded-full" alt="">
            </div> 
            <div class="">
              <span class="font-bold text-base pt-3">Cameron Williamson</span>
              <p class="text-base font-normal">${lastp.author.name}</p>
            </div>
          </div>
        </div>
      </div>
        
        
        `;




        lastedcontent.appendChild(lastcard);
        
  

    }
    
   
    


 }
 lastedPost()