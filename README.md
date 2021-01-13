# Docs
I've introduced lightweight Modal component, that doesn't require any 3rd. party dependency except `styled-components`

## Modal component usage

```javascript
<Modal
    isActive={isActive}
    portalContainerId="modal"
    onClose={() => shouldChangeIsActiveToFalse()}
    modalTitle="Title"
>
    {content}
</Modal>
```

#### Required props:
- `isActive`: [boolean] - tells modal if is active or not 
- `portalContainerId`: [string] - has to exist on `index.html` page, for example `<div id="modal"></div>` - It will create react portal on this DOM element
- `onClose`: [function] - callback that should change `isActive` flag
- `modalTitle`: [string] - title of modal
  
#### Optional props:
- `unmountOnClose`: [boolean = false] - when true, will unmount modal on close, but CSS3 Transition will stop work (due to removal whole element from DOM) 
- `closeOnBackdropClick`: [boolean = false] - when true, click on a backdrop will trigger `onClose` callback


## Components for OrderExample (1 order step of 3)
- I didn't create controlled components - depends on your state implementation (redux, redux-form, etc)
