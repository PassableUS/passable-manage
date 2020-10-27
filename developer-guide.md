# GitHub References

[GitHub Flow Guide](https://guides.github.com/introduction/flow/)



# Documentation

**Client Documentation WIP**

[View Documentation](https://app.gitbook.com/@josephsemrai/s/passable/)



# Useful Tools

Tailwind UI does not provide JSX code for its components, to which this extension will automate some of the translation process:

[Tailwind UI Chrome Extension](https://chrome.google.com/webstore/detail/tailwind-ui-react/binfindfddkgfibeajgkmjioklcgigjn)

> **Please note that this extension does not completely automate the translation process. Input, button, and other tags still require ending tags to be created (or converted into self-closing tags)**
>
> For example:
>
> ```jsx
> <input id="email" className="form-input block w-full sm:text-sm sm:leading-5" placeholder="you@example.com" aria-describedby="email-description">
> ```
>
> **TO**
>
> ```jsx
> <input id="email" className="form-input block w-full sm:text-sm sm:leading-5" placeholder="you@example.com" aria-describedby="email-description" />
> ```

# Recommended VS Code Setup

**Extensions**

[Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

[ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

* **rafce** **-> This snippet will be used to create new components, etc. (as required by our style guide)**

[ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)

[TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)



# Packager Notes

**To access the compiled Tailwind styles, use this import alias:**

```import '@styles/main.css';```

**Do not use a relative import to access styles (instead use the @styles/ alias to the styles folder).**
