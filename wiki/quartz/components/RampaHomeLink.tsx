import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const RampaHomeLink: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={displayClass ?? ""}>
      <a class="rampa-home-link" href="/" data-router-ignore>
        Nazaj na glavno stran
      </a>
    </div>
  )
}

RampaHomeLink.css = `
.rampa-home-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.25rem 0 0;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--lightgray);
  background: color-mix(in srgb, var(--light) 88%, white);
  color: var(--dark);
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 24px -18px rgba(15, 23, 42, 0.45);
}

.rampa-home-link:hover {
  color: var(--secondary);
  border-color: var(--secondary);
}

.rampa-home-link::before {
  content: "←";
}
`

export default (() => RampaHomeLink) satisfies QuartzComponentConstructor
