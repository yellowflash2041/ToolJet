export const postgreSqlSelector = {
  leftSidebarDatasourceButton: "[data-cy='left-sidebar-sources-button']",
  labelDataSources: "[data-cy='label-datasources']",
  addDatasourceLink: "[data-cy='add-datasource-link']",

  allDatasourceLabelAndCount: '[data-rb-event-key="#alldatasources"]',
  databaseLabelAndCount: '[data-rb-event-key="#databases"]',
  apiLabelAndCount: '[data-rb-event-key="#apis"]',
  cloudStorageLabelAndCount: '[data-rb-event-key="#cloudstorage"]',
  dataSourceSearchInputField: '[data-cy="datasource-search-input"]',

  postgresDataSource: "[data-cy='data-source-postgresql']",
  dataSourceNameInputField: '[data-cy="data-source-name-input-filed"]',
  labelHost: '[data-cy="label-host"]',
  labelPort: '[data-cy="label-port"]',
  labelSsl: '[data-cy="label-ssl"]',
  labelDbName: '[data-cy="label-database-name"]',
  labelUserName: '[data-cy="label-username"]',
  labelPassword: '[data-cy="label-password"]',
  labelSSLCertificate: '[data-cy="ssl-certificate-dropdown-label"]',
  labelIpWhitelist: '[data-cy="white-list-ip-text"]',
  buttonCopyIp: '[data-cy="button-copy-ip"]',
  linkReadDocumentation: '[data-cy="link-read-documentation"]',
  buttonTestConnection: '[data-cy="test-connection-button"]',
  connectionFailedText: '[data-cy="test-connection-failed-text"]',
  buttonSave: '[data-cy="db-connection-save-button"]',
  dangerAlertNotSupportSSL: '[class="alert alert-danger"]',

  passwordTextField: '[data-cy="password-text-field"]',
  textConnectionVerified: '[data-cy="test-connection-verified-text"]',
  datasourceLabelOnList: '[data-cy="datasource-Label"]',

  buttonAddNewQueries: '[data-cy="button-add-new-queries"]',
  addQueriesCard: '[data-cy="postgresql-add-query-card"]',
  headerQueryManager: '[data-cy="header-queries-on-query-manager"]',
  labelNoQuery: '[data-cy="no-query-text"]',
  createQueryButton: '[data-cy="create-query-button"]',
  querySearchIcon: '[data-cy="query-search-icon"]',
  labelSelectDataSource: '[data-cy="label-select-datasource"]',
  queryTabGeneral: '[data-cy="query-tab-general"]',
  queryLabelInputField: '[data-cy="query-label-input-field"]',
  queryPreviewButton: '[data-cy="query-preview-button"]',
  queryCreateAndRunButton: '[data-cy="query-create-and-run-button"]',
  queryCreateDropdown: '[data-cy="query-create-dropdown"]',
  queryCreateAndRunOption: '[data-cy="query-create-and-run-option"]',
  queryCreateOption: '[data-cy="query-create-option"]',
  queryInputField: '[data-cy="query-input-field"]',
  labelTransformation: '[data-cy="label-query-transformation"]',
  toggleTransformation: '[data-cy="toggle-query-transformation"]',
  inputFieldTransformation: '[data-cy="transformation-input-input-field"]',

  headerQueryPreview: '[data-cy="header-query-preview"]',
  previewTabJson: '[data-cy="preview-tab-json"]',
  previewTabRaw: '[data-cy="preview-tab-raw"]',

  operationsDropDownLabel: '[data-cy="operation-dropdown-label"]',
  labelTableNameInputField: '[data-cy="label-table"]',
  labelPrimaryKeyColoumn: '[data-cy="label-primary-key-column"]',
  labelRecordsToUpdate: '[data-cy="label-records-to-update"]',

  queryTabAdvanced: '[data-cy="query-tab-advanced"]',

  labelRunQueryOnPageLoad: '[data-cy="label-run-query-on-page-load"]',
  labelRequestConfirmationOnRun:
    '[data-cy="label-request-confirmation-on-run"]',
  labelShowNotification: '[data-cy="label-show-notification"]',
  toggleNotification: '[data-cy="toggle-show-notification"]',
  labelSuccessMessageInput: '[data-cy="label-success-message-input"]',
  notificationDurationInput: '[data-cy="label-notification-duration-input"]',
  addEventHandler: '[data-cy="add-event-handler"]',
  noEventHandlerMessage: '[data-cy="no-event-handler-message"]',
  postgresqlQueryRunButton: '[data-cy="postgresql1-query-run-button"]',
  psqlQueryLabel: '[data-cy="postgresql1-query-label"]',
  psqlQueryDeleteButton: '[data-cy="postgresql1-query-delete-button"]',
  deleteModalMessage: '[data-cy="modal-message"]',
  deleteModalCancelButton: '[data-cy="modal-cancel-button"]',
  deleteModalConfirmButton: '[data-cy="modal-confirm-button"]',
};
