export var data: any = {
    ST1 : {
        id: "X1",
        label: "X1",
        children: [
            {
                id: "X1-1",
                label: "X1-1",
                selector: "page1"
            },
            {
                id: "X1-2",
                label: "X1-2",
                selector: "page2"
            }
        ]
    },
    ST2: {
        id: "X2",
        label: "X2",
        selector: "parent",
        children: [
            {
                id: "X2-1",
                label: "X2-1",
                children: [
                    {
                        id: "X2-1-1",
                        label: "X2-1-1",
                        selector: "page3"
                    }],
            },
            {
                id: "X2-2",
                label: "X2-2",
                selector: "page2"
            }
        ]
    }
};


