
var data = 
    {
        id: "X2",
        label: "X2",
        selector: "parent",
        children: [
            {
                id: "X2-1",
                label: "X2-1",
                children: [
                    {
                        id: "X2-11",
                        label: "X2-11",
                        selector: "child"
                    },
                    {
                        id: "X2-12",
                        label: "X2-12",
                        children: [
                            {
                                id: "X2-123",
                                label: "X2-123",
                                selector: "child"
                            }
                        ]
                    }
                ],
            },
            {
                id: "X2-2",
                label: "X2-2",
                selector: "child2"
            }
        ]
    };



function buildPath(obj){
    function iter(r, p) {
        var children = r.children;
        if (children && children.length) {
          return children.forEach(x => iter(x, p.concat(r.id)));
        }else{p.push(r.id)}
        result.push({path: p.join('/'), selector: r.selector})
      }
      var result = [];
      iter(obj, []);
      return result;
}
  
  
console.log(buildPath(data))