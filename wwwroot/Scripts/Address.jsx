class Address extends React.Component {
    render() {
        var provinces = [
            { code: "ON", name: "Ontario" },
            { code: "BC", name: "British Columbia" },
            { code: "QC", name: "Quebec" },
            { code: "AB", name: "Alberta" },
            { code: "NS", name: "Nova Scotia" },
            { code: "NB", name: "New Brunswick" },
            { code: "MB", name: "Manitoba" },
            { code: "PE", name: "Prince Edward Island" },
            { code: "NL", name: "Newfoundland and Labrador" },
            { code: "NT", name: "Northwest Territories" },
            { code: "NU", name: "Nunavut" },
            { code: "YT", name: "Yukon" }
        ];
        var addrBlockStyle = {
            marginBottom: 10,
            marginTop: 5,
            paddingBottom: 10,
            paddingTop: 5
        };

        function makeProvinceOptions(x) {
            return <option key={x.code} value={x.code}>{x.name}</option>
        }

        var handlerChange = (e) => {
            var addr = this.props.address;
            if (e.target.id == "txtStreet")
                addr.street = e.target.value;
            else if (e.target.id == "txtCity")
                addr.city = e.target.value;
            else if (e.target.id == "drpProvince")
                addr.provinceState = e.target.value;
            else if (e.target.id == "txtPostalCode")
                addr.postalCode = e.target.value;
            this.props.onAddressChange(addr);
        }

        return (
            <div style={addrBlockStyle}>
                <div className="row form‐group">
                    <div className="col‐md‐2 label‐align">
                        <label htmlFor="txtStreet">Street:</label>
                    </div>
                    <div className="col‐md‐10">
                        <input type="text" id="txtStreet" className="form‐control"
                            onChange={handlerChange} value={this.props.address.street} />
                    </div>
                </div>
                <div className="row form‐group">
                    <div className="col‐md‐2 label‐align">
                        <label htmlFor="txtCity">City:</label>
                    </div>
                    <div className="col‐md‐10">
                        <input type="text" id="txtCity" className="form‐control"
                            onChange={handlerChange} value={this.props.address.city} />
                    </div>
                </div>
                <div className="row form‐group">
                    <div className="col‐md‐2 label‐align">
                        <label htmlFor="txtProvince">Province:</label>
                    </div>
                    <div className="col‐md‐5">
                        <select type="text" id="drpProvince" className="form‐control"
                            onChange={handlerChange} value={this.props.address.provinceState}>
                            {provinces.map(makeProvinceOptions)}
                        </select>
                    </div>
                    <div className="col‐md‐2 label‐align">
                        <label htmlFor="txtPostalCode">Postal Code:</label>
                    </div>
                    <div className="col‐md‐3">
                        <input type="text" id="txtPostalCode" className="form‐control"
                            onChange={handlerChange}
                            value={this.props.address.postalCode} />
                    </div>
                </div>
            </div>);
    }
}
