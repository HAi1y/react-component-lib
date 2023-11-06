import * as React from 'react';
import { Classes } from './Classes';

export interface UIGridLayoutProps {
	classes?: Classes
}

export function UIGridLayout({ classes = new Classes, children }: React.PropsWithChildren<UIGridLayoutProps>) {

	return (
		<div className={classes.toClassName()}>
			{children}
		</div>
	)
}