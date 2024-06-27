import { Component } from "react";


abstract class Project extends Component {
    public constructor(props: {}) {
        super(props);
        
    }

    public abstract render(): JSX.Element;
}

function construct<T extends Project>(
    ctor: new (props: {}) => T,
    props: {}
  ): T {
    return new ctor(props);
  }



export {}