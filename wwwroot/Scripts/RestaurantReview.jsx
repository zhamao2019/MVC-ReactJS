class RestaurantReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            name: this.props.data.name,
            address: this.props.data.address,
            summary: this.props.data.summary,
            rating: this.props.data.rating,
            food: this.props.data.foodType,
            showConfirm: { display: "none" }
        };
    }

    render() {
        var handleAddressChange = (newAddress) => {
            this.setState({ address: newAddress });
        }
        var handleSummaryChange = (e) => {
            this.setState({ summary: e.target.value });
        }
        //var handleRatingChange = (e) => {
        //    this.setState({ rating: { currentRating: e.target.value } });
        //}
        var handleRatingChange = (e) => {
            this.setState({ rating: e.target.value });
        }
        var submitChange = () => {
            var restInfo = {
                Id: this.state.id,
                Name: this.state.name,
                Address: this.state.address,
                Summary: this.state.summary,
                Rating: this.state.rating,
                FoodType: this.state.food,
            }
            $.ajax({
                url: RestaurantReviewsURL + "/" + this.state.id,
                type: 'PUT',
                contentType: "application/json",
                data: JSON.stringify(restInfo),
                success: function () {
                    this.setState({ showConfirm: { display: "inherit" } });
                }.bind(this),
                error: function (event, request, settings) {
                    console.log(settings);
                    console.log(event);
                    console.log(request);
                    console.log(restInfo);
                }
            });
        }

        return (
            <div className="row">
                <div className="col‐md‐9">
                    <fieldset>
                        <legend>{this.state.name}</legend>
                        <Address address={this.state.address}
                            onAddressChange={handleAddressChange} />
                        <div className="row form-group">
                            <div className="col-md-2 col-form-label">
                                <label htmlFor="txtSummary">Summary:</label>
                            </div>
                            <div className="col‐md‐10">
                                <textarea id="txtSummary" className="form-control"
                                    rows="4" value={this.state.summary}
                                    onChange={handleSummaryChange}></textarea>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col‐md‐2 col-form-label">
                                <label htmlFor="drpRating">Rating: </label>
                            </div>
                            <div className="col‐md‐10">
                                <select id="drpRating" className="form-control col-form-label"
                                    value={this.state.rating}
                                    onChange={handleRatingChange}>
                                    <option key="1" value="1">1</option>
                                    <option key="2" value="2">2</option>
                                    <option key="3" value="3">3</option>
                                    <option key="4" value="4">4</option>
                                    <option key="5" value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div className="row form-group">
                            <div className="col‐md‐2 col-form-label">
                                <button className="btn btn-primary" type="button"
                                    onClick={submitChange}>Save</button>
                            </div>
                            <div className="col‐md‐10" id="divConfirmation">
                                <span className="form-control alert alert-success"
                                    style={this.state.showConfirm} >Update Saved
                                </span>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        );
    }
}
