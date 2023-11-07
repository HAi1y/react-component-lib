import { useParams } from "react-router-dom"

export default class Application {
	public icon: React.JSX.Element
	public name: string
	public content: Record<string, React.ReactNode>
}