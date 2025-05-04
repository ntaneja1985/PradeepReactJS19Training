import {Component} from "react";

class ProductListClass extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts : []
        }
    }
    //use Effect (() => {},[selectedCategory])
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        const {selectedCategory,myname, onNotify} = this.props;
        if(prevProps.selectedCategory !== selectedCategory){
            const filtered = selectedCategory ? products.filter(f =>f.category == selectedCategory) : products;
            this.setState({filteredProducts : filtered});
        }
    }

    //use Effect (() => {},[]) useEffect with blank array
    componentDidMount() {

    }
    // use Effect return syntax for cleanup
    componentWillUnmount() {
    }
}