import * as React from 'react';

export interface UIGridLayoutProps {
	className?: string
}

export function UIGridLayout({ className, children }: React.PropsWithChildren<UIGridLayoutProps>) {

	return (
		<div className={[className].concat("ios grid-layout").join(' ')}>
			{children}
		</div>
	)
}