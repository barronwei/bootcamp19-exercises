import React, { Component, Fragment } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            pronoun: "",
            hometown: "",
            food1: "",
            food2: "",
            food3: "",
            birthday: "",
            huid: "",
            concentration: "",
            submit: false,
        };
    }
    handleChange = (event) => {
        this.setState({submit: false})
        this.setState({[event.target.name]: [event.target.value]})
    }
    handleSubmit = () => {
        if (this.state.name && this.state.gender && this.state.pronoun && this.state.hometown &&
            this.state.food1 && this.state.food2 && this.state.food3 && 
            this.state.birthday && this.state.huid && this.state.concentration) {
                this.setState({submit: true})
        }
        else {
            alert("Please complete all fields!")
        }
    }
    render() {
        if (this.state.submit) {
            return (
                <Fragment>
                    <label>
                        Name
                        <div><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Gender
                       <div><input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                        Pronoun
                        <div>
                            <select name="pronoun" value={this.state.pronoun} onChange={this.handleChange}>
                                <option value="">Pronoun</option>
                                <option value="he">He</option>
                                <option value="she">She</option>
                                <option value="they">They</option>
                            </select>
                        </div>
                    </label>
                    <label>
                       Hometown
                       <div><input type="text" name="hometown" value={this.state.hometown} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Favorite Food 1
                       <div><input type="text" name="food1" value={this.state.food1} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Favorite Food 2
                       <div><input type="text" name="food2" value={this.state.food2} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Favorite Food 3
                       <div><input type="text" name="food3" value={this.state.food3} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Birthday
                       <div><input type="text" name="birthday" value={this.state.birthday} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       HUID
                       <div><input type="number" name="huid" value={this.state.huid} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                        Concentration
                        <div>
                            <select name="concentration" value={this.state.concentration} onChange={this.handleChange}>
                                <option value="">Concentration</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Applied Mathematics">Applied Mathematics</option>
                                <option value="Statistics">Statistics</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    <div>
                        User's name is {this.state.name} and {this.state.pronoun} is from {this.state.hometown}. {this.state.pronoun} was born on {this.state.birthday}, and {this.state.pronoun} favorite foods are {this.state.food1}, {this.state.food2}, and {this.state.food3}. At Harvard, {this.state.name} studies {this.state.concentration}.
                    </div>
                </Fragment>
              )
        }
        else {
            return (
                <Fragment>
                    <label>
                        Name
                        <div><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Gender
                       <div><input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                        Pronoun
                        <div>
                            <select name="pronoun" value={this.state.pronoun} onChange={this.handleChange}>
                                <option value="">Pronoun</option>
                                <option value="he">He</option>
                                <option value="she">She</option>
                                <option value="they">They</option>
                            </select>
                        </div>
                    </label>
                    <label>
                       Hometown
                       <div><input type="text" name="hometown" value={this.state.hometown} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Favorite Food 1
                       <div><input type="text" name="food1" value={this.state.food1} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Favorite Food 2
                       <div><input type="text" name="food2" value={this.state.food2} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Favorite Food 3
                       <div><input type="text" name="food3" value={this.state.food3} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       Birthday
                       <div><input type="text" name="birthday" value={this.state.birthday} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                       HUID
                       <div><input type="number" name="huid" value={this.state.huid} onChange={this.handleChange} /></div>
                    </label>
                    <label>
                        Concentration
                        <div>
                            <select name="concentration" value={this.state.concentration} onChange={this.handleChange}>
                                <option value="">Concentration</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Applied Mathematics">Applied Mathematics</option>
                                <option value="Statistics">Statistics</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </Fragment>
              )
        }
    }
}

export default Form;
