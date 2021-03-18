import FontAwesome from 'react-fontawesome';


onstructor(){
    super()
    this.state = {
      location: [
        {
            id: 0,
            title: 'New York',
            selected: false,
            key: 'location'
        },
        {
            id: 1,
            title: 'Dublin',
            selected: false,
            key: 'location'
        },
        {
            id: 2,
            title: 'California',
            selected: false,
            key: 'location'
        },
        {
            id: 3,
            title: 'Istanbul',
            selected: false,
            key: 'location'
        },
        {
            id: 4,
            title: 'Izmir',
            selected: false,
            key: 'location'
        },
        {
            id: 5,
            title: 'Oslo',
            selected: false,
            key: 'location'
        }
      ]
     }
    }

<Dropdown  
  title="Select location"
  list={this.state.location}
/>  

<constructor(props){
    super(props)
    this.state = {
      isListOpen: false,
      headerTitle: this.props.title
    }
  }

  render() {
    const { isListOpen, headerTitle } = this.state;
    const { list } = this.props;
  
    return (
      <div className="dd-wrapper">
        <button
          type="button"
          className="dd-header"
          onClick={this.toggleList}
        >
          <div className="dd-header-title">{headerTitle}</div>
          {isListOpen
            ? <FontAwesome name="angle-up" size="2x" />
            : <FontAwesome name="angle-down" size="2x" />}
        </button>
        {isListOpen && (
          <div
            role="list"
            className="dd-list"
          >
            {list.map((item) => (
              <button
                type="button"
                className="dd-list-item"
                key={item.id}
                onClick={() => this.selectItem(item)}
              >
                {item.title}
                {' '}
                {item.selected && <FontAwesome name="check" />}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }