import React, { Fragment } from 'react'
import { Widget, Status, LazyBoi, Button, Pill, Blockie } from '@components'
import { Account } from '@archetypes'
import { AccountStore } from '@store'
import { truncateString } from '@util/helpers'

const AccountStatus = props => {
	return null
}

const Icon = props => {
	const { state } = AccountStore()
	return state.status === 'CONNECTED'
		? <Blockie address={state?.address} diameter={20}/>
		: <Status.Dot status={state?.status} {...props}/>
}

const Text = props => {
	const status = Account.useStatus()
	return <Status 
		status={status} 
		title={status} 
		{...props}
	/>
}

const Minimal = props => {
	const { state, trigger } = AccountStore()
	return <Widget.Minimal
		title={
			<Fragment>
				Account
				{
					state?.network?.id !== 1 
						? <Pill small status={'warning'} text={state?.network?.name}/> 
						: ''
				}
			</Fragment>
		}
		subtitle={<LazyBoi value={state?.address ? truncateString(state?.address) : <span>Disconnected</span>}/>}
		info={
			<LazyBoi 
				value={
					state?.address 
						? <Button inline onClick={() => trigger('disconnect')}>Disconnect</Button> 
						: <Button inline onClick={() => trigger('connect')}>Connect</Button>
				}
			/>
		}
		extra={
			<Icon large/>
		}
		{...props}
	/>
}

const Full = props => {
	return null
}

AccountStatus.Icon = Icon
AccountStatus.Text = Text
AccountStatus.Minimal = Minimal
AccountStatus.Full = Full

export default AccountStatus