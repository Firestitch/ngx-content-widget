/**
 * One value a content widget's copy may use, as the API lists it on the widget: the widget
 * editor shows these so the person editing knows what they can write, and the server refuses
 * content that uses anything else.
 */
export interface FsContentWidgetVariable {
  name: string;
  /** The variable as content writes it, e.g. `{$clinicName}`. */
  token: string;
  label: string;
  description?: string;
}
