var input = [
    {
      id: 1,
      title: "Person 1",
      children: [
        {
          id: 2,
          title: "Person 2",
          children: [],
        },
      ],
    },
    {
      id: 3,
      title: "Person 3",
      children: [
        {
          id: 4,
          title: "Person 4",
          children: [
            {
              id: 5,
              title: "Person 5",
              children: [],
            },
          ],
        },
      ],
    },
  ];
  var output=[];


  function flat(data){
      if(data.length!==0){
        data.forEach(element => {
            output.push({
                id:element.id,
                title:element.title,
                Child:[]
            })
             flat(element.children)
        });
       
      }
  }
   flat(input);
   console.log(output);

