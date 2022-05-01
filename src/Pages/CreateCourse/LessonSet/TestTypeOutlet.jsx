import './TestTypeOutlet.scss'

const TestTypeOutlet = () => {
  return (
    <div id="test__type">
      <div className="test">
        <div className="test__question">
          <div className="test__question-title">Добавить вопрос</div>
          <div className="test__question-item">
            <div className="head">
              <span className='head__num'>1</span>
              <h6 className="head__title">Первый вопрос</h6>
              <div className="head__tools">
                <div className="head__tools-edit">
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 4.82733C14.6672 4.73959 14.6503 4.65262 14.6172 4.57139C14.584 4.49017 14.5351 4.41629 14.4733 4.354L11.6467 1.52733C11.5844 1.46554 11.5105 1.41666 11.4293 1.38348C11.348 1.3503 11.2611 1.33349 11.1733 1.334C11.0856 1.33349 10.9986 1.3503 10.9174 1.38348C10.8362 1.41666 10.7623 1.46554 10.7 1.52733L8.81332 3.414L1.52666 10.7007C1.46487 10.763 1.41599 10.8368 1.38281 10.9181C1.34963 10.9993 1.33282 11.0863 1.33332 11.174V14.0007C1.33332 14.1775 1.40356 14.347 1.52859 14.4721C1.65361 14.5971 1.82318 14.6673 1.99999 14.6673H4.82666C4.91994 14.6724 5.01325 14.6578 5.10054 14.6245C5.18782 14.5912 5.26713 14.5399 5.33332 14.474L12.58 7.18733L14.4733 5.334C14.5342 5.26938 14.5838 5.19502 14.62 5.114C14.6264 5.06086 14.6264 5.00714 14.62 4.954C14.6231 4.92296 14.6231 4.8917 14.62 4.86066L14.6667 4.82733ZM4.55332 13.334H2.66666V11.4473L9.28666 4.82733L11.1733 6.714L4.55332 13.334ZM12.1133 5.774L10.2267 3.88733L11.1733 2.94733L13.0533 4.82733L12.1133 5.774Z" fill="#26CAAC" />
                  </svg>
                </div>
                <div className="head__tools-delete">
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66667 12.0007C6.84348 12.0007 7.01305 11.9304 7.13807 11.8054C7.2631 11.6804 7.33333 11.5108 7.33333 11.334V7.33398C7.33333 7.15717 7.2631 6.9876 7.13807 6.86258C7.01305 6.73756 6.84348 6.66732 6.66667 6.66732C6.48986 6.66732 6.32029 6.73756 6.19526 6.86258C6.07024 6.9876 6 7.15717 6 7.33398V11.334C6 11.5108 6.07024 11.6804 6.19526 11.8054C6.32029 11.9304 6.48986 12.0007 6.66667 12.0007ZM13.3333 4.00065H10.6667V3.33398C10.6667 2.80355 10.456 2.29484 10.0809 1.91977C9.70581 1.5447 9.1971 1.33398 8.66667 1.33398H7.33333C6.8029 1.33398 6.29419 1.5447 5.91912 1.91977C5.54405 2.29484 5.33333 2.80355 5.33333 3.33398V4.00065H2.66667C2.48986 4.00065 2.32029 4.07089 2.19526 4.19591C2.07024 4.32094 2 4.49051 2 4.66732C2 4.84413 2.07024 5.0137 2.19526 5.13872C2.32029 5.26375 2.48986 5.33398 2.66667 5.33398H3.33333V12.6673C3.33333 13.1978 3.54405 13.7065 3.91912 14.0815C4.29419 14.4566 4.8029 14.6673 5.33333 14.6673H10.6667C11.1971 14.6673 11.7058 14.4566 12.0809 14.0815C12.456 13.7065 12.6667 13.1978 12.6667 12.6673V5.33398H13.3333C13.5101 5.33398 13.6797 5.26375 13.8047 5.13872C13.9298 5.0137 14 4.84413 14 4.66732C14 4.49051 13.9298 4.32094 13.8047 4.19591C13.6797 4.07089 13.5101 4.00065 13.3333 4.00065ZM6.66667 3.33398C6.66667 3.15717 6.7369 2.9876 6.86193 2.86258C6.98695 2.73756 7.15652 2.66732 7.33333 2.66732H8.66667C8.84348 2.66732 9.01305 2.73756 9.13807 2.86258C9.2631 2.9876 9.33333 3.15717 9.33333 3.33398V4.00065H6.66667V3.33398ZM11.3333 12.6673C11.3333 12.8441 11.2631 13.0137 11.1381 13.1387C11.013 13.2637 10.8435 13.334 10.6667 13.334H5.33333C5.15652 13.334 4.98695 13.2637 4.86193 13.1387C4.7369 13.0137 4.66667 12.8441 4.66667 12.6673V5.33398H11.3333V12.6673ZM9.33333 12.0007C9.51014 12.0007 9.67971 11.9304 9.80474 11.8054C9.92976 11.6804 10 11.5108 10 11.334V7.33398C10 7.15717 9.92976 6.9876 9.80474 6.86258C9.67971 6.73756 9.51014 6.66732 9.33333 6.66732C9.15652 6.66732 8.98695 6.73756 8.86193 6.86258C8.73691 6.9876 8.66667 7.15717 8.66667 7.33398V11.334C8.66667 11.5108 8.73691 11.6804 8.86193 11.8054C8.98695 11.9304 9.15652 12.0007 9.33333 12.0007Z" fill="#EB5757" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="cases">
              <div className="cases__item">
                <span className='cases__item-num'>A</span>
                <h6 className='cases__item-title'>Первый ответ</h6>
                <div className="cases__item-tools">
                  <div className="edit">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6667 4.82733C14.6672 4.73959 14.6503 4.65262 14.6172 4.57139C14.584 4.49017 14.5351 4.41629 14.4733 4.354L11.6467 1.52733C11.5844 1.46554 11.5105 1.41666 11.4293 1.38348C11.348 1.3503 11.2611 1.33349 11.1733 1.334C11.0856 1.33349 10.9986 1.3503 10.9174 1.38348C10.8362 1.41666 10.7623 1.46554 10.7 1.52733L8.81332 3.414L1.52666 10.7007C1.46487 10.763 1.41599 10.8368 1.38281 10.9181C1.34963 10.9993 1.33282 11.0863 1.33332 11.174V14.0007C1.33332 14.1775 1.40356 14.347 1.52859 14.4721C1.65361 14.5971 1.82318 14.6673 1.99999 14.6673H4.82666C4.91994 14.6724 5.01325 14.6578 5.10054 14.6245C5.18782 14.5912 5.26713 14.5399 5.33332 14.474L12.58 7.18733L14.4733 5.334C14.5342 5.26938 14.5838 5.19502 14.62 5.114C14.6264 5.06086 14.6264 5.00714 14.62 4.954C14.6231 4.92296 14.6231 4.8917 14.62 4.86066L14.6667 4.82733ZM4.55332 13.334H2.66666V11.4473L9.28666 4.82733L11.1733 6.714L4.55332 13.334ZM12.1133 5.774L10.2267 3.88733L11.1733 2.94733L13.0533 4.82733L12.1133 5.774Z" fill="#26CAAC" />
                    </svg>
                  </div>
                  <div className="delete">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66667 12.0007C6.84348 12.0007 7.01305 11.9304 7.13807 11.8054C7.2631 11.6804 7.33333 11.5108 7.33333 11.334V7.33398C7.33333 7.15717 7.2631 6.9876 7.13807 6.86258C7.01305 6.73756 6.84348 6.66732 6.66667 6.66732C6.48986 6.66732 6.32029 6.73756 6.19526 6.86258C6.07024 6.9876 6 7.15717 6 7.33398V11.334C6 11.5108 6.07024 11.6804 6.19526 11.8054C6.32029 11.9304 6.48986 12.0007 6.66667 12.0007ZM13.3333 4.00065H10.6667V3.33398C10.6667 2.80355 10.456 2.29484 10.0809 1.91977C9.70581 1.5447 9.1971 1.33398 8.66667 1.33398H7.33333C6.8029 1.33398 6.29419 1.5447 5.91912 1.91977C5.54405 2.29484 5.33333 2.80355 5.33333 3.33398V4.00065H2.66667C2.48986 4.00065 2.32029 4.07089 2.19526 4.19591C2.07024 4.32094 2 4.49051 2 4.66732C2 4.84413 2.07024 5.0137 2.19526 5.13872C2.32029 5.26375 2.48986 5.33398 2.66667 5.33398H3.33333V12.6673C3.33333 13.1978 3.54405 13.7065 3.91912 14.0815C4.29419 14.4566 4.8029 14.6673 5.33333 14.6673H10.6667C11.1971 14.6673 11.7058 14.4566 12.0809 14.0815C12.456 13.7065 12.6667 13.1978 12.6667 12.6673V5.33398H13.3333C13.5101 5.33398 13.6797 5.26375 13.8047 5.13872C13.9298 5.0137 14 4.84413 14 4.66732C14 4.49051 13.9298 4.32094 13.8047 4.19591C13.6797 4.07089 13.5101 4.00065 13.3333 4.00065ZM6.66667 3.33398C6.66667 3.15717 6.7369 2.9876 6.86193 2.86258C6.98695 2.73756 7.15652 2.66732 7.33333 2.66732H8.66667C8.84348 2.66732 9.01305 2.73756 9.13807 2.86258C9.2631 2.9876 9.33333 3.15717 9.33333 3.33398V4.00065H6.66667V3.33398ZM11.3333 12.6673C11.3333 12.8441 11.2631 13.0137 11.1381 13.1387C11.013 13.2637 10.8435 13.334 10.6667 13.334H5.33333C5.15652 13.334 4.98695 13.2637 4.86193 13.1387C4.7369 13.0137 4.66667 12.8441 4.66667 12.6673V5.33398H11.3333V12.6673ZM9.33333 12.0007C9.51014 12.0007 9.67971 11.9304 9.80474 11.8054C9.92976 11.6804 10 11.5108 10 11.334V7.33398C10 7.15717 9.92976 6.9876 9.80474 6.86258C9.67971 6.73756 9.51014 6.66732 9.33333 6.66732C9.15652 6.66732 8.98695 6.73756 8.86193 6.86258C8.73691 6.9876 8.66667 7.15717 8.66667 7.33398V11.334C8.66667 11.5108 8.73691 11.6804 8.86193 11.8054C8.98695 11.9304 9.15652 12.0007 9.33333 12.0007Z" fill="#EB5757" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cases__item">
                <span className='cases__item-num'>B</span>
                <h6 className='cases__item-title'>Правильный ответ</h6>
                <div className="cases__item-tools">
                  <div className="edit">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6667 4.82733C14.6672 4.73959 14.6503 4.65262 14.6172 4.57139C14.584 4.49017 14.5351 4.41629 14.4733 4.354L11.6467 1.52733C11.5844 1.46554 11.5105 1.41666 11.4293 1.38348C11.348 1.3503 11.2611 1.33349 11.1733 1.334C11.0856 1.33349 10.9986 1.3503 10.9174 1.38348C10.8362 1.41666 10.7623 1.46554 10.7 1.52733L8.81332 3.414L1.52666 10.7007C1.46487 10.763 1.41599 10.8368 1.38281 10.9181C1.34963 10.9993 1.33282 11.0863 1.33332 11.174V14.0007C1.33332 14.1775 1.40356 14.347 1.52859 14.4721C1.65361 14.5971 1.82318 14.6673 1.99999 14.6673H4.82666C4.91994 14.6724 5.01325 14.6578 5.10054 14.6245C5.18782 14.5912 5.26713 14.5399 5.33332 14.474L12.58 7.18733L14.4733 5.334C14.5342 5.26938 14.5838 5.19502 14.62 5.114C14.6264 5.06086 14.6264 5.00714 14.62 4.954C14.6231 4.92296 14.6231 4.8917 14.62 4.86066L14.6667 4.82733ZM4.55332 13.334H2.66666V11.4473L9.28666 4.82733L11.1733 6.714L4.55332 13.334ZM12.1133 5.774L10.2267 3.88733L11.1733 2.94733L13.0533 4.82733L12.1133 5.774Z" fill="#26CAAC" />
                    </svg>
                  </div>
                  <div className="delete">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66667 12.0007C6.84348 12.0007 7.01305 11.9304 7.13807 11.8054C7.2631 11.6804 7.33333 11.5108 7.33333 11.334V7.33398C7.33333 7.15717 7.2631 6.9876 7.13807 6.86258C7.01305 6.73756 6.84348 6.66732 6.66667 6.66732C6.48986 6.66732 6.32029 6.73756 6.19526 6.86258C6.07024 6.9876 6 7.15717 6 7.33398V11.334C6 11.5108 6.07024 11.6804 6.19526 11.8054C6.32029 11.9304 6.48986 12.0007 6.66667 12.0007ZM13.3333 4.00065H10.6667V3.33398C10.6667 2.80355 10.456 2.29484 10.0809 1.91977C9.70581 1.5447 9.1971 1.33398 8.66667 1.33398H7.33333C6.8029 1.33398 6.29419 1.5447 5.91912 1.91977C5.54405 2.29484 5.33333 2.80355 5.33333 3.33398V4.00065H2.66667C2.48986 4.00065 2.32029 4.07089 2.19526 4.19591C2.07024 4.32094 2 4.49051 2 4.66732C2 4.84413 2.07024 5.0137 2.19526 5.13872C2.32029 5.26375 2.48986 5.33398 2.66667 5.33398H3.33333V12.6673C3.33333 13.1978 3.54405 13.7065 3.91912 14.0815C4.29419 14.4566 4.8029 14.6673 5.33333 14.6673H10.6667C11.1971 14.6673 11.7058 14.4566 12.0809 14.0815C12.456 13.7065 12.6667 13.1978 12.6667 12.6673V5.33398H13.3333C13.5101 5.33398 13.6797 5.26375 13.8047 5.13872C13.9298 5.0137 14 4.84413 14 4.66732C14 4.49051 13.9298 4.32094 13.8047 4.19591C13.6797 4.07089 13.5101 4.00065 13.3333 4.00065ZM6.66667 3.33398C6.66667 3.15717 6.7369 2.9876 6.86193 2.86258C6.98695 2.73756 7.15652 2.66732 7.33333 2.66732H8.66667C8.84348 2.66732 9.01305 2.73756 9.13807 2.86258C9.2631 2.9876 9.33333 3.15717 9.33333 3.33398V4.00065H6.66667V3.33398ZM11.3333 12.6673C11.3333 12.8441 11.2631 13.0137 11.1381 13.1387C11.013 13.2637 10.8435 13.334 10.6667 13.334H5.33333C5.15652 13.334 4.98695 13.2637 4.86193 13.1387C4.7369 13.0137 4.66667 12.8441 4.66667 12.6673V5.33398H11.3333V12.6673ZM9.33333 12.0007C9.51014 12.0007 9.67971 11.9304 9.80474 11.8054C9.92976 11.6804 10 11.5108 10 11.334V7.33398C10 7.15717 9.92976 6.9876 9.80474 6.86258C9.67971 6.73756 9.51014 6.66732 9.33333 6.66732C9.15652 6.66732 8.98695 6.73756 8.86193 6.86258C8.73691 6.9876 8.66667 7.15717 8.66667 7.33398V11.334C8.66667 11.5108 8.73691 11.6804 8.86193 11.8054C8.98695 11.9304 9.15652 12.0007 9.33333 12.0007Z" fill="#EB5757" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cases__item">
                <span className='cases__item-num'>C</span>
                <h6 className='cases__item-title'>Третьий ответ</h6>
                <div className="cases__item-tools">
                  <div className="edit">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6667 4.82733C14.6672 4.73959 14.6503 4.65262 14.6172 4.57139C14.584 4.49017 14.5351 4.41629 14.4733 4.354L11.6467 1.52733C11.5844 1.46554 11.5105 1.41666 11.4293 1.38348C11.348 1.3503 11.2611 1.33349 11.1733 1.334C11.0856 1.33349 10.9986 1.3503 10.9174 1.38348C10.8362 1.41666 10.7623 1.46554 10.7 1.52733L8.81332 3.414L1.52666 10.7007C1.46487 10.763 1.41599 10.8368 1.38281 10.9181C1.34963 10.9993 1.33282 11.0863 1.33332 11.174V14.0007C1.33332 14.1775 1.40356 14.347 1.52859 14.4721C1.65361 14.5971 1.82318 14.6673 1.99999 14.6673H4.82666C4.91994 14.6724 5.01325 14.6578 5.10054 14.6245C5.18782 14.5912 5.26713 14.5399 5.33332 14.474L12.58 7.18733L14.4733 5.334C14.5342 5.26938 14.5838 5.19502 14.62 5.114C14.6264 5.06086 14.6264 5.00714 14.62 4.954C14.6231 4.92296 14.6231 4.8917 14.62 4.86066L14.6667 4.82733ZM4.55332 13.334H2.66666V11.4473L9.28666 4.82733L11.1733 6.714L4.55332 13.334ZM12.1133 5.774L10.2267 3.88733L11.1733 2.94733L13.0533 4.82733L12.1133 5.774Z" fill="#26CAAC" />
                    </svg>
                  </div>
                  <div className="delete">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66667 12.0007C6.84348 12.0007 7.01305 11.9304 7.13807 11.8054C7.2631 11.6804 7.33333 11.5108 7.33333 11.334V7.33398C7.33333 7.15717 7.2631 6.9876 7.13807 6.86258C7.01305 6.73756 6.84348 6.66732 6.66667 6.66732C6.48986 6.66732 6.32029 6.73756 6.19526 6.86258C6.07024 6.9876 6 7.15717 6 7.33398V11.334C6 11.5108 6.07024 11.6804 6.19526 11.8054C6.32029 11.9304 6.48986 12.0007 6.66667 12.0007ZM13.3333 4.00065H10.6667V3.33398C10.6667 2.80355 10.456 2.29484 10.0809 1.91977C9.70581 1.5447 9.1971 1.33398 8.66667 1.33398H7.33333C6.8029 1.33398 6.29419 1.5447 5.91912 1.91977C5.54405 2.29484 5.33333 2.80355 5.33333 3.33398V4.00065H2.66667C2.48986 4.00065 2.32029 4.07089 2.19526 4.19591C2.07024 4.32094 2 4.49051 2 4.66732C2 4.84413 2.07024 5.0137 2.19526 5.13872C2.32029 5.26375 2.48986 5.33398 2.66667 5.33398H3.33333V12.6673C3.33333 13.1978 3.54405 13.7065 3.91912 14.0815C4.29419 14.4566 4.8029 14.6673 5.33333 14.6673H10.6667C11.1971 14.6673 11.7058 14.4566 12.0809 14.0815C12.456 13.7065 12.6667 13.1978 12.6667 12.6673V5.33398H13.3333C13.5101 5.33398 13.6797 5.26375 13.8047 5.13872C13.9298 5.0137 14 4.84413 14 4.66732C14 4.49051 13.9298 4.32094 13.8047 4.19591C13.6797 4.07089 13.5101 4.00065 13.3333 4.00065ZM6.66667 3.33398C6.66667 3.15717 6.7369 2.9876 6.86193 2.86258C6.98695 2.73756 7.15652 2.66732 7.33333 2.66732H8.66667C8.84348 2.66732 9.01305 2.73756 9.13807 2.86258C9.2631 2.9876 9.33333 3.15717 9.33333 3.33398V4.00065H6.66667V3.33398ZM11.3333 12.6673C11.3333 12.8441 11.2631 13.0137 11.1381 13.1387C11.013 13.2637 10.8435 13.334 10.6667 13.334H5.33333C5.15652 13.334 4.98695 13.2637 4.86193 13.1387C4.7369 13.0137 4.66667 12.8441 4.66667 12.6673V5.33398H11.3333V12.6673ZM9.33333 12.0007C9.51014 12.0007 9.67971 11.9304 9.80474 11.8054C9.92976 11.6804 10 11.5108 10 11.334V7.33398C10 7.15717 9.92976 6.9876 9.80474 6.86258C9.67971 6.73756 9.51014 6.66732 9.33333 6.66732C9.15652 6.66732 8.98695 6.73756 8.86193 6.86258C8.73691 6.9876 8.66667 7.15717 8.66667 7.33398V11.334C8.66667 11.5108 8.73691 11.6804 8.86193 11.8054C8.98695 11.9304 9.15652 12.0007 9.33333 12.0007Z" fill="#EB5757" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cases__item">
                <span className='cases__item-num'>D</span>
                <h6 className='cases__item-title'>Четвертый ответ</h6>
                <div className="cases__item-tools">
                  <div className="edit">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6667 4.82733C14.6672 4.73959 14.6503 4.65262 14.6172 4.57139C14.584 4.49017 14.5351 4.41629 14.4733 4.354L11.6467 1.52733C11.5844 1.46554 11.5105 1.41666 11.4293 1.38348C11.348 1.3503 11.2611 1.33349 11.1733 1.334C11.0856 1.33349 10.9986 1.3503 10.9174 1.38348C10.8362 1.41666 10.7623 1.46554 10.7 1.52733L8.81332 3.414L1.52666 10.7007C1.46487 10.763 1.41599 10.8368 1.38281 10.9181C1.34963 10.9993 1.33282 11.0863 1.33332 11.174V14.0007C1.33332 14.1775 1.40356 14.347 1.52859 14.4721C1.65361 14.5971 1.82318 14.6673 1.99999 14.6673H4.82666C4.91994 14.6724 5.01325 14.6578 5.10054 14.6245C5.18782 14.5912 5.26713 14.5399 5.33332 14.474L12.58 7.18733L14.4733 5.334C14.5342 5.26938 14.5838 5.19502 14.62 5.114C14.6264 5.06086 14.6264 5.00714 14.62 4.954C14.6231 4.92296 14.6231 4.8917 14.62 4.86066L14.6667 4.82733ZM4.55332 13.334H2.66666V11.4473L9.28666 4.82733L11.1733 6.714L4.55332 13.334ZM12.1133 5.774L10.2267 3.88733L11.1733 2.94733L13.0533 4.82733L12.1133 5.774Z" fill="#26CAAC" />
                    </svg>
                  </div>
                  <div className="delete">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66667 12.0007C6.84348 12.0007 7.01305 11.9304 7.13807 11.8054C7.2631 11.6804 7.33333 11.5108 7.33333 11.334V7.33398C7.33333 7.15717 7.2631 6.9876 7.13807 6.86258C7.01305 6.73756 6.84348 6.66732 6.66667 6.66732C6.48986 6.66732 6.32029 6.73756 6.19526 6.86258C6.07024 6.9876 6 7.15717 6 7.33398V11.334C6 11.5108 6.07024 11.6804 6.19526 11.8054C6.32029 11.9304 6.48986 12.0007 6.66667 12.0007ZM13.3333 4.00065H10.6667V3.33398C10.6667 2.80355 10.456 2.29484 10.0809 1.91977C9.70581 1.5447 9.1971 1.33398 8.66667 1.33398H7.33333C6.8029 1.33398 6.29419 1.5447 5.91912 1.91977C5.54405 2.29484 5.33333 2.80355 5.33333 3.33398V4.00065H2.66667C2.48986 4.00065 2.32029 4.07089 2.19526 4.19591C2.07024 4.32094 2 4.49051 2 4.66732C2 4.84413 2.07024 5.0137 2.19526 5.13872C2.32029 5.26375 2.48986 5.33398 2.66667 5.33398H3.33333V12.6673C3.33333 13.1978 3.54405 13.7065 3.91912 14.0815C4.29419 14.4566 4.8029 14.6673 5.33333 14.6673H10.6667C11.1971 14.6673 11.7058 14.4566 12.0809 14.0815C12.456 13.7065 12.6667 13.1978 12.6667 12.6673V5.33398H13.3333C13.5101 5.33398 13.6797 5.26375 13.8047 5.13872C13.9298 5.0137 14 4.84413 14 4.66732C14 4.49051 13.9298 4.32094 13.8047 4.19591C13.6797 4.07089 13.5101 4.00065 13.3333 4.00065ZM6.66667 3.33398C6.66667 3.15717 6.7369 2.9876 6.86193 2.86258C6.98695 2.73756 7.15652 2.66732 7.33333 2.66732H8.66667C8.84348 2.66732 9.01305 2.73756 9.13807 2.86258C9.2631 2.9876 9.33333 3.15717 9.33333 3.33398V4.00065H6.66667V3.33398ZM11.3333 12.6673C11.3333 12.8441 11.2631 13.0137 11.1381 13.1387C11.013 13.2637 10.8435 13.334 10.6667 13.334H5.33333C5.15652 13.334 4.98695 13.2637 4.86193 13.1387C4.7369 13.0137 4.66667 12.8441 4.66667 12.6673V5.33398H11.3333V12.6673ZM9.33333 12.0007C9.51014 12.0007 9.67971 11.9304 9.80474 11.8054C9.92976 11.6804 10 11.5108 10 11.334V7.33398C10 7.15717 9.92976 6.9876 9.80474 6.86258C9.67971 6.73756 9.51014 6.66732 9.33333 6.66732C9.15652 6.66732 8.98695 6.73756 8.86193 6.86258C8.73691 6.9876 8.66667 7.15717 8.66667 7.33398V11.334C8.66667 11.5108 8.73691 11.6804 8.86193 11.8054C8.98695 11.9304 9.15652 12.0007 9.33333 12.0007Z" fill="#EB5757" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cases__action">
                <button data-type='create'>
                  <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6665 5.33366H6.6665V1.33366C6.6665 1.15685 6.59627 0.987279 6.47124 0.862254C6.34622 0.73723 6.17665 0.666992 5.99984 0.666992C5.82303 0.666992 5.65346 0.73723 5.52843 0.862254C5.40341 0.987279 5.33317 1.15685 5.33317 1.33366V5.33366H1.33317C1.15636 5.33366 0.98679 5.4039 0.861766 5.52892C0.736742 5.65394 0.666504 5.82351 0.666504 6.00033C0.666504 6.17714 0.736742 6.34671 0.861766 6.47173C0.98679 6.59675 1.15636 6.66699 1.33317 6.66699H5.33317V10.667C5.33317 10.8438 5.40341 11.0134 5.52843 11.1384C5.65346 11.2634 5.82303 11.3337 5.99984 11.3337C6.17665 11.3337 6.34622 11.2634 6.47124 11.1384C6.59627 11.0134 6.6665 10.8438 6.6665 10.667V6.66699H10.6665C10.8433 6.66699 11.0129 6.59675 11.1379 6.47173C11.2629 6.34671 11.3332 6.17714 11.3332 6.00033C11.3332 5.82351 11.2629 5.65394 11.1379 5.52892C11.0129 5.4039 10.8433 5.33366 10.6665 5.33366Z" fill="white" />
                  </svg>
                  Добавить вариант ответа
                </button>
                <button className='cases__action-info' data-type='primary'>
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99992 1.33398C6.68138 1.33398 5.39245 1.72498 4.29612 2.45752C3.19979 3.19006 2.34531 4.23125 1.84072 5.44943C1.33614 6.6676 1.20412 8.00805 1.46135 9.30125C1.71859 10.5945 2.35353 11.7823 3.28588 12.7147C4.21823 13.647 5.40611 14.282 6.69932 14.5392C7.99253 14.7965 9.33297 14.6644 10.5511 14.1598C11.7693 13.6553 12.8105 12.8008 13.5431 11.7045C14.2756 10.6081 14.6666 9.31919 14.6666 8.00065C14.6646 6.23314 13.9616 4.53859 12.7118 3.28878C11.462 2.03896 9.76743 1.33595 7.99992 1.33398ZM7.99992 13.334C6.94509 13.334 5.91394 13.0212 5.03688 12.4352C4.15982 11.8491 3.47623 11.0162 3.07256 10.0416C2.6689 9.06709 2.56328 7.99474 2.76907 6.96017C2.97485 5.9256 3.48281 4.9753 4.22869 4.22941C4.97457 3.48354 5.92487 2.97558 6.95944 2.7698C7.99401 2.56401 9.06636 2.66963 10.0409 3.07329C11.0154 3.47696 11.8484 4.16055 12.4344 5.03761C13.0205 5.91467 13.3333 6.94582 13.3333 8.00065C13.3316 9.41464 12.7692 10.7703 11.7694 11.7701C10.7695 12.7699 9.41391 13.3324 7.99992 13.334ZM7.99992 7.66732C7.82311 7.66732 7.65354 7.73756 7.52852 7.86258C7.40349 7.9876 7.33325 8.15717 7.33325 8.33398V10.334C7.33325 10.5108 7.40349 10.6804 7.52852 10.8054C7.65354 10.9304 7.82311 11.0007 7.99992 11.0007C8.17673 11.0007 8.3463 10.9304 8.47133 10.8054C8.59635 10.6804 8.66659 10.5108 8.66659 10.334V8.33398C8.66659 8.15717 8.59635 7.9876 8.47133 7.86258C8.3463 7.73756 8.17673 7.66732 7.99992 7.66732ZM7.99992 5.00065C7.8351 5.00065 7.67399 5.04953 7.53695 5.14109C7.39991 5.23266 7.2931 5.36281 7.23002 5.51508C7.16695 5.66735 7.15045 5.83491 7.1826 5.99656C7.21475 6.15821 7.29412 6.3067 7.41067 6.42324C7.52721 6.53978 7.67569 6.61915 7.83735 6.65131C7.999 6.68346 8.16655 6.66696 8.31882 6.60388C8.4711 6.54081 8.60124 6.434 8.69281 6.29696C8.78438 6.15992 8.83325 5.9988 8.83325 5.83398C8.83325 5.61297 8.74546 5.40101 8.58918 5.24473C8.4329 5.08845 8.22094 5.00065 7.99992 5.00065Z" fill="white" />
                  </svg>
                    Объяснение
                </button>
              </div>
            </div>
            <button data-type='primary'>
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6665 5.33366H6.6665V1.33366C6.6665 1.15685 6.59627 0.987279 6.47124 0.862254C6.34622 0.73723 6.17665 0.666992 5.99984 0.666992C5.82303 0.666992 5.65346 0.73723 5.52843 0.862254C5.40341 0.987279 5.33317 1.15685 5.33317 1.33366V5.33366H1.33317C1.15636 5.33366 0.98679 5.4039 0.861766 5.52892C0.736742 5.65394 0.666504 5.82351 0.666504 6.00033C0.666504 6.17714 0.736742 6.34671 0.861766 6.47173C0.98679 6.59675 1.15636 6.66699 1.33317 6.66699H5.33317V10.667C5.33317 10.8438 5.40341 11.0134 5.52843 11.1384C5.65346 11.2634 5.82303 11.3337 5.99984 11.3337C6.17665 11.3337 6.34622 11.2634 6.47124 11.1384C6.59627 11.0134 6.6665 10.8438 6.6665 10.667V6.66699H10.6665C10.8433 6.66699 11.0129 6.59675 11.1379 6.47173C11.2629 6.34671 11.3332 6.17714 11.3332 6.00033C11.3332 5.82351 11.2629 5.65394 11.1379 5.52892C11.0129 5.4039 10.8433 5.33366 10.6665 5.33366Z" fill="white" />
                </svg>
              Добавить новый вопрос</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TestTypeOutlet