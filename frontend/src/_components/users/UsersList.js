import React, { Component } from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import { SearchIcon } from '_assets/images'
import ScrollArea from 'react-scrollbar'
import LoadingOverlay from 'react-loading-overlay'
import ClipLoader from 'react-spinners/ClipLoader'
import UserCard from './UserCard'
import FriendCard from './FriendsCard'

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidUpdate() {
    if (this.nameInput != undefined) {
      this.nameInput.focus()
    }
  }
  handleScroll(e) {
    if (e.realHeight !== 0) {
      const bottomPosition = e.realHeight - e.topPosition === e.containerHeight
      if (bottomPosition && !this.props.loading) {
        this.props.getNextPage()
      }
    }
  }

  render() {
    const users = this.props.users

    const scrollBarVerticalStyle = {
      width: '5px',
      background: '#0182E8',
      marginLeft: 'auto',
      borderRadius: '2px'
    }
    const scrollBarVerticalContainerStyle = {
      backgroundColor: 'transparent'
    }

    return (
      <Card className={'content-card'}>
        <div className="header">
          <CardTitle>
            People
            {users && (
              <small className={'subtitle'}>{this.props.userCount.count}</small>
            )}
          </CardTitle>
        </div>
        <div className="card-search">
          <div className="icon">
            <InlineSVG raw src={SearchIcon} />
          </div>
          <input
            type="text"
            className="search-field"
            value={this.props.searchValue}
            onChange={this.props.onInputChange}
            ref={input => {
              this.nameInput = input
            }}
          />
        </div>
        <CardBody className={'body-list'}>
          {!users && (
            <LoadingOverlay
              spinner={<ClipLoader size={50} />}
              active={this.props.loading}
              styles={{
                overlay: base => ({
                  ...base,
                  background: 'rgba(0, 0, 0, 0.15)'
                }),
                wrapper: base => ({
                  ...base,
                  margin: 'auto'
                })
              }}
            />
          )}
          {users && (
            <LoadingOverlay
              spinner={<ClipLoader size={50} />}
              active={this.props.loading}
              styles={{
                overlay: base => ({
                  ...base,
                  background: 'rgba(0, 0, 0, 0)'
                }),
                wrapper: base => ({
                  ...base,
                  display: 'flex',
                  flexDirection: 'column'
                })
              }}
            >
              <ScrollArea
                verticalScrollbarStyle={scrollBarVerticalStyle}
                verticalContainerStyle={scrollBarVerticalContainerStyle}
                onScroll={this.handleScroll}
                stopScrollPropagation={true}
                speed={0.5}
                smoothScrolling={true}
              >
                {users &&
                  users.map(user => <UserCard user={user} key={user.id} />)}
              </ScrollArea>
              {users.length === 0 && (
                <div className="zero_conv">Nothing....</div>
              )}
            </LoadingOverlay>
          )}
        </CardBody>
      </Card>
    )
  }
}

export default UsersList
