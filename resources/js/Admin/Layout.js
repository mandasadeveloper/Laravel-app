import Nav from "./Navigation";
import {
TopBar,
ActionList,
AppProvider,
Frame,
Toast,
ContextualSaveBar,
Loading,
Page,
Layout,
Card,
FormLayout,
TextField,
SkeletonBodyText,
SkeletonDisplayText,
SkeletonPage,
TextContainer,
Modal,
} from "@shopify/polaris";
import { 
useState,useCallback,useRef
 } from "react";
import FrameExample from "./Routes/Routes";

export default function LayOut() {
    const defaultState = useRef({
      emailFieldValue: 'pscadda.com',
      nameFieldValue: 'Jaded Pixel',
    });
    const skipToContentRef = useRef(null);
  
    const [toastActive, setToastActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [userMenuActive, setUserMenuActive] = useState(false);
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [nameFieldValue, setNameFieldValue] = useState(
      defaultState.current.nameFieldValue,
    );
    const [emailFieldValue, setEmailFieldValue] = useState(
      defaultState.current.emailFieldValue,
    );
    const [storeName, setStoreName] = useState(
      defaultState.current.nameFieldValue,
    );
    const [supportSubject, setSupportSubject] = useState('');
    const [supportMessage, setSupportMessage] = useState('');
  
    const handleSubjectChange = useCallback(
      (value) => setSupportSubject(value),
      [],
    );
    const handleMessageChange = useCallback(
      (value) => setSupportMessage(value),
      [],
    );
    const handleDiscard = useCallback(() => {
      setEmailFieldValue(defaultState.current.emailFieldValue);
      setNameFieldValue(defaultState.current.nameFieldValue);
      setIsDirty(false);
    }, []);
    const handleSave = useCallback(() => {
      defaultState.current.nameFieldValue = nameFieldValue;
      defaultState.current.emailFieldValue = emailFieldValue;
  
      setIsDirty(false);
      setToastActive(true);
      setStoreName(defaultState.current.nameFieldValue);
    }, [emailFieldValue, nameFieldValue]);
    const handleNameFieldChange = useCallback((value) => {
      setNameFieldValue(value);
      value && setIsDirty(true);
    }, []);
    const handleEmailFieldChange = useCallback((value) => {
      setEmailFieldValue(value);
      value && setIsDirty(true);
    }, []);
    const handleSearchResultsDismiss = useCallback(() => {
      setSearchActive(false);
      setSearchValue('');
    }, []);
    const handleSearchFieldChange = useCallback((value) => {
      setSearchValue(value);
      setSearchActive(value.length > 0);
    }, []);
    const toggleToastActive = useCallback(
      () => setToastActive((toastActive) => !toastActive),
      [],
    );
    const toggleUserMenuActive = useCallback(
      () => setUserMenuActive((userMenuActive) => !userMenuActive),
      [],
    );
    const toggleMobileNavigationActive = useCallback(
      () =>
        setMobileNavigationActive(
          (mobileNavigationActive) => !mobileNavigationActive,
        ),
      [],
    );
    const toggleIsLoading = useCallback(
      () => setIsLoading((isLoading) => !isLoading),
      [],
    );
    const toggleModalActive = useCallback(
      () => setModalActive((modalActive) => !modalActive),
      [],
    );
  
    const toastMarkup = toastActive ? (
      <Toast onDismiss={toggleToastActive} content="Changes saved" />
    ) : null;
  
    const userMenuActions = [
      {
        items: [{content: 'Community forums'}],
      },
    ];
  
    const contextualSaveBarMarkup = isDirty ? (
      <ContextualSaveBar
        message="Unsaved changes"
        saveAction={{
          onAction: handleSave,
        }}
        discardAction={{
          onAction: handleDiscard,
        }}
      />
    ) : null;
  
    const userMenuMarkup = (
      <TopBar.UserMenu       
        name="Mandasa technologies"      
        initials="MT"     
      />
    );
  
    const searchResultsMarkup = (
      <ActionList
        items={[{content: 'Shopify help center'}, {content: 'Community forums'}]}
      />
    );
  
    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={handleSearchFieldChange}
        value={searchValue}
        placeholder="Search"
      />
    );
  
    const topBarMarkup = (
      <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        searchResultsVisible={searchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={toggleMobileNavigationActive}
      />
    );  
    

    const navigationMarkup =(
    <Nav/>   
    )
  
    const loadingMarkup = isLoading ? <Loading /> : null;
  
    const skipToContentTarget = (
      <a id="SkipToContentTarget" ref={skipToContentRef} tabIndex={-1} />
    );
  
    const actualPageMarkup = (
      <Page title="Account">
        <Layout>
          {skipToContentTarget}
          <Layout.AnnotatedSection
            title="Account details"
            description="Jaded Pixel will use this as your account information."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  label="Full name"
                  value={nameFieldValue}
                  onChange={handleNameFieldChange}
                />
                <TextField
                  type="email"
                  label="Email"
                  value={emailFieldValue}
                  onChange={handleEmailFieldChange}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  
    const loadingPageMarkup = (
      <SkeletonPage>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={9} />
              </TextContainer>
            </Card>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    );
  
    const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;
  
    const modalMarkup = (
      <Modal
        open={modalActive}
        onClose={toggleModalActive}
        title="Contact support"
        primaryAction={{
          content: 'Send',
          onAction: toggleModalActive,
        }}
      >
        <Modal.Section>
          <FormLayout>
            <TextField
              label="Subject"
              value={supportSubject}
              onChange={handleSubjectChange}
            />
            <TextField
              label="Message"
              value={supportMessage}
              onChange={handleMessageChange}
              multiline
            />
          </FormLayout>
        </Modal.Section>
      </Modal>
    );
  
    const theme = {
      logo: {
        width: 100,
        topBarSource:
         'https://mandasa.in/wp-content/uploads/2021/03/new_logo_web.png',            
      },
    };
  
    return (
      <div style={{height: '500px'}}>
        <AppProvider
          theme={theme}
          i18n={{
            Polaris: {
              Avatar: {
                label: 'Avatar',
                labelWithInitials: 'Avatar with initials {initials}',
              },
              ContextualSaveBar: {
                save: 'Save',
                discard: 'Discard',
              },
              TextField: {
                characterCount: '{count} characters',
              },
              TopBar: {
                toggleMenuLabel: 'Toggle menu',
  
                SearchField: {
                  clearButtonLabel: 'Clear',
                  search: 'Search',
                },
              },
              Modal: {
                iFrameTitle: 'body markup',
              },
              Frame: {
                skipToContent: 'Skip to content',
                navigationLabel: 'Navigation',
                Navigation: {
                  closeMobileNavigationLabel: 'Close navigation',
                },
              },
            },
          }}
        >
          <Frame
            topBar={topBarMarkup}
            navigation={navigationMarkup}
            showMobileNavigation={mobileNavigationActive}
            onNavigationDismiss={toggleMobileNavigationActive}
            skipToContentTarget={skipToContentRef.current}
          >                   
              <FrameExample/>
          </Frame>
        </AppProvider>
      </div>
    );
  }