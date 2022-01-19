interface AppState {
  viewGlobal: ViewState;
  sorting: string;
  filtering: string;
  layout: Layout;
  whiteBalanced: boolean;
}

const stateDefaults = {
  viewGlobal: ViewState.Wrapper,
  filtering: 'all',
  layout: Layout.Card,
  whiteBalanced: true,
}