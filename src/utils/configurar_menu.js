    const builTree =  () => {
        // List<Menu> treeMenus =new  ArrayList<Menu>();
        // for(Menu menuNode : getRootNode()) {
        //     menuNode=buildChilTree(menuNode);
        //    treeMenus.add(menuNode);
        // }
        // return treeMenus;
        const treeMenu = [];

    }

    //Recursion, building subtree structure
    private Menu buildChilTree(Menu pNode){
        List<Menu> chilMenus =new  ArrayList<Menu>();
        for(Menu menuNode : menuList) {
            if(menuNode.getParentId().equals(pNode.getId())) {
               chilMenus.add(buildChilTree(menuNode));
            }
        }
        pNode.setChildren(chilMenus);
        return pNode;
    }

    //Get root node
    private List<Menu> getRootNode() {         
        List<Menu> rootMenuLists =new  ArrayList<Menu>();
        for(Menu menuNode : menuList) {
           if(menuNode.getParentId().equals("0")) {
                rootMenuLists.add(menuNode);
            }
        }
        return rootMenuLists;
    }
}