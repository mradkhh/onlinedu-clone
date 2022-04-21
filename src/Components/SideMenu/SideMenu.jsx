import { Link } from 'react-router-dom'
import './SideMenu.scss'

const SideMenu = () => {
  return (
    <aside id='side' className="side__menu">
      <Link to={"/stat"} className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66683 8.66634H2.00016C1.82335 8.66634 1.65378 8.73658 1.52876 8.8616C1.40373 8.98663 1.3335 9.1562 1.3335 9.33301V13.9997C1.3335 14.1765 1.40373 14.3461 1.52876 14.4711C1.65378 14.5961 1.82335 14.6663 2.00016 14.6663H6.66683C6.84364 14.6663 7.01321 14.5961 7.13823 14.4711C7.26326 14.3461 7.3335 14.1765 7.3335 13.9997V9.33301C7.3335 9.1562 7.26326 8.98663 7.13823 8.8616C7.01321 8.73658 6.84364 8.66634 6.66683 8.66634ZM6.00016 13.333H2.66683V9.99967H6.00016V13.333ZM14.0002 1.33301H9.3335C9.15669 1.33301 8.98712 1.40325 8.86209 1.52827C8.73707 1.65329 8.66683 1.82286 8.66683 1.99967V6.66634C8.66683 6.84315 8.73707 7.01272 8.86209 7.13775C8.98712 7.26277 9.15669 7.33301 9.3335 7.33301H14.0002C14.177 7.33301 14.3465 7.26277 14.4716 7.13775C14.5966 7.01272 14.6668 6.84315 14.6668 6.66634V1.99967C14.6668 1.82286 14.5966 1.65329 14.4716 1.52827C14.3465 1.40325 14.177 1.33301 14.0002 1.33301V1.33301ZM13.3335 5.99967H10.0002V2.66634H13.3335V5.99967ZM14.0002 8.66634H9.3335C9.15669 8.66634 8.98712 8.73658 8.86209 8.8616C8.73707 8.98663 8.66683 9.1562 8.66683 9.33301V13.9997C8.66683 14.1765 8.73707 14.3461 8.86209 14.4711C8.98712 14.5961 9.15669 14.6663 9.3335 14.6663H14.0002C14.177 14.6663 14.3465 14.5961 14.4716 14.4711C14.5966 14.3461 14.6668 14.1765 14.6668 13.9997V9.33301C14.6668 9.1562 14.5966 8.98663 14.4716 8.8616C14.3465 8.73658 14.177 8.66634 14.0002 8.66634ZM13.3335 13.333H10.0002V9.99967H13.3335V13.333ZM6.66683 1.33301H2.00016C1.82335 1.33301 1.65378 1.40325 1.52876 1.52827C1.40373 1.65329 1.3335 1.82286 1.3335 1.99967V6.66634C1.3335 6.84315 1.40373 7.01272 1.52876 7.13775C1.65378 7.26277 1.82335 7.33301 2.00016 7.33301H6.66683C6.84364 7.33301 7.01321 7.26277 7.13823 7.13775C7.26326 7.01272 7.3335 6.84315 7.3335 6.66634V1.99967C7.3335 1.82286 7.26326 1.65329 7.13823 1.52827C7.01321 1.40325 6.84364 1.33301 6.66683 1.33301V1.33301ZM6.00016 5.99967H2.66683V2.66634H6.00016V5.99967Z" fill="#898DA6" />
        </svg>
        Статистика
      </Link>
      <Link to={"/qualification"} className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3269 6.79371L13.6602 6.42704L7.66024 3.09371H7.58691C7.54604 3.07643 7.50363 3.06304 7.46024 3.05371H7.33358H7.21358C7.16803 3.06304 7.12341 3.07643 7.08024 3.09371H7.00691L1.00691 6.42704C0.904312 6.48519 0.818973 6.56951 0.7596 6.6714C0.700227 6.7733 0.668945 6.88911 0.668945 7.00704C0.668945 7.12497 0.700227 7.24079 0.7596 7.34269C0.818973 7.44458 0.904312 7.5289 1.00691 7.58704L2.66691 8.50704V11.667C2.66691 12.1975 2.87762 12.7062 3.2527 13.0813C3.62777 13.4563 4.13648 13.667 4.66691 13.667H10.0002C10.5307 13.667 11.0394 13.4563 11.4145 13.0813C11.7895 12.7062 12.0002 12.1975 12.0002 11.667V8.50704L13.3336 7.76038V9.66704C13.3336 9.84385 13.4038 10.0134 13.5288 10.1384C13.6539 10.2635 13.8234 10.3337 14.0002 10.3337C14.1771 10.3337 14.3466 10.2635 14.4716 10.1384C14.5967 10.0134 14.6669 9.84385 14.6669 9.66704V7.37371C14.6667 7.25558 14.6351 7.13962 14.5754 7.03771C14.5156 6.9358 14.4299 6.85159 14.3269 6.79371ZM10.6669 11.667C10.6669 11.8439 10.5967 12.0134 10.4716 12.1384C10.3466 12.2635 10.1771 12.3337 10.0002 12.3337H4.66691C4.4901 12.3337 4.32053 12.2635 4.19551 12.1384C4.07048 12.0134 4.00024 11.8439 4.00024 11.667V9.24704L7.00691 10.9137L7.10691 10.9537H7.16691C7.22225 10.9607 7.27824 10.9607 7.33358 10.9537C7.38891 10.9607 7.44491 10.9607 7.50024 10.9537H7.56024C7.59564 10.9462 7.62947 10.9327 7.66024 10.9137L10.6669 9.24704V11.667ZM7.33358 9.57371L2.70691 7.00038L7.33358 4.42704L11.9602 7.00038L7.33358 9.57371Z" fill="#898DA6" />
        </svg>
        Квалификация
      </Link>
      <Link to="/payment" className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2735 10.3397H10.2535C10.0767 10.3397 9.90712 10.4099 9.78209 10.5349C9.65707 10.66 9.58683 10.8295 9.58683 11.0063C9.58683 11.1832 9.65707 11.3527 9.78209 11.4777C9.90712 11.6028 10.0767 11.673 10.2535 11.673H11.8535C11.1181 12.4415 10.1698 12.9726 9.13027 13.1979C8.09078 13.4233 7.00764 13.3327 6.02001 12.9378C5.03239 12.5429 4.18541 11.8617 3.58789 10.9818C2.99037 10.1018 2.66961 9.06332 2.66683 7.99967C2.66683 7.82286 2.59659 7.65329 2.47157 7.52827C2.34654 7.40325 2.17697 7.33301 2.00016 7.33301C1.82335 7.33301 1.65378 7.40325 1.52876 7.52827C1.40373 7.65329 1.3335 7.82286 1.3335 7.99967C1.33702 9.30154 1.72164 10.5739 2.4399 11.6597C3.15815 12.7455 4.17861 13.5972 5.37532 14.1098C6.57204 14.6224 7.89265 14.7734 9.17417 14.5441C10.4557 14.3148 11.6421 13.7154 12.5868 12.8197V13.9997C12.5868 14.1765 12.6571 14.3461 12.7821 14.4711C12.9071 14.5961 13.0767 14.6663 13.2535 14.6663C13.4303 14.6663 13.5999 14.5961 13.7249 14.4711C13.8499 14.3461 13.9202 14.1765 13.9202 13.9997V10.9997C13.9185 10.8274 13.8503 10.6625 13.7297 10.5395C13.6092 10.4164 13.4457 10.3448 13.2735 10.3397ZM8.00016 1.33301C6.29109 1.33788 4.64916 1.99895 3.4135 3.17967V1.99967C3.4135 1.82286 3.34326 1.65329 3.21823 1.52827C3.09321 1.40325 2.92364 1.33301 2.74683 1.33301C2.57002 1.33301 2.40045 1.40325 2.27542 1.52827C2.1504 1.65329 2.08016 1.82286 2.08016 1.99967V4.99967C2.08016 5.17649 2.1504 5.34605 2.27542 5.47108C2.40045 5.5961 2.57002 5.66634 2.74683 5.66634H5.74683C5.92364 5.66634 6.09321 5.5961 6.21823 5.47108C6.34326 5.34605 6.4135 5.17649 6.4135 4.99967C6.4135 4.82286 6.34326 4.65329 6.21823 4.52827C6.09321 4.40325 5.92364 4.33301 5.74683 4.33301H4.14683C4.88181 3.56492 5.82956 3.03401 6.86843 2.80841C7.9073 2.58282 8.98989 2.67284 9.97723 3.06692C10.9646 3.46099 11.8116 4.14115 12.4097 5.02008C13.0077 5.899 13.3294 6.9366 13.3335 7.99967C13.3335 8.17649 13.4037 8.34606 13.5288 8.47108C13.6538 8.5961 13.8234 8.66634 14.0002 8.66634C14.177 8.66634 14.3465 8.5961 14.4716 8.47108C14.5966 8.34606 14.6668 8.17649 14.6668 7.99967C14.6668 7.1242 14.4944 6.25729 14.1594 5.44845C13.8243 4.63961 13.3333 3.90469 12.7142 3.28563C12.0952 2.66657 11.3602 2.17551 10.5514 1.84048C9.74255 1.50545 8.87564 1.33301 8.00016 1.33301Z" fill="#898DA6" />
        </svg>
        Повторение
      </Link>
      <Link to="/profile" className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.0002 1.33301C6.70718 1.33546 5.44278 1.71388 4.36101 2.42217C3.27925 3.13045 2.42679 4.13803 1.90749 5.32219C1.38819 6.50634 1.22445 7.81595 1.43621 9.09151C1.64798 10.3671 2.22611 11.5535 3.1002 12.5063C3.72448 13.183 4.48216 13.7231 5.32549 14.0925C6.16882 14.4619 7.07952 14.6526 8.0002 14.6526C8.92087 14.6526 9.83157 14.4619 10.6749 14.0925C11.5182 13.7231 12.2759 13.183 12.9002 12.5063C13.7743 11.5535 14.3524 10.3671 14.5642 9.09151C14.7759 7.81595 14.6122 6.50634 14.0929 5.32219C13.5736 4.13803 12.7211 3.13045 11.6394 2.42217C10.5576 1.71388 9.29321 1.33546 8.0002 1.33301ZM8.0002 13.333C6.61917 13.3309 5.29281 12.7932 4.3002 11.833C4.60156 11.0994 5.11422 10.4719 5.77303 10.0303C6.43184 9.58866 7.20707 9.35288 8.0002 9.35288C8.79332 9.35288 9.56855 9.58866 10.2274 10.0303C10.8862 10.4719 11.3988 11.0994 11.7002 11.833C10.7076 12.7932 9.38122 13.3309 8.0002 13.333ZM6.66686 6.66634C6.66686 6.40263 6.74506 6.14485 6.89157 5.92558C7.03808 5.70632 7.24632 5.53542 7.48995 5.4345C7.73359 5.33358 8.00167 5.30718 8.26031 5.35863C8.51896 5.41007 8.75653 5.53706 8.943 5.72353C9.12947 5.91 9.25646 6.14758 9.30791 6.40622C9.35936 6.66486 9.33295 6.93295 9.23203 7.17659C9.13112 7.42022 8.96022 7.62846 8.74095 7.77497C8.52169 7.92148 8.2639 7.99967 8.0002 7.99967C7.64657 7.99967 7.30743 7.8592 7.05739 7.60915C6.80734 7.3591 6.66686 7.01996 6.66686 6.66634ZM12.6069 10.6663C12.0112 9.64751 11.0945 8.85503 10.0002 8.41301C10.3396 8.02811 10.5608 7.55345 10.6372 7.04597C10.7135 6.53849 10.6418 6.01975 10.4307 5.55201C10.2195 5.08426 9.87792 4.68738 9.4468 4.40898C9.01568 4.13059 8.51339 3.98251 8.0002 3.98251C7.487 3.98251 6.98471 4.13059 6.55359 4.40898C6.12247 4.68738 5.78084 5.08426 5.56969 5.55201C5.35855 6.01975 5.28685 6.53849 5.36321 7.04597C5.43958 7.55345 5.66075 8.02811 6.0002 8.41301C4.90593 8.85503 3.98917 9.64751 3.39353 10.6663C2.91882 9.85774 2.66801 8.93732 2.66686 7.99967C2.66686 6.58519 3.22877 5.22863 4.22896 4.22844C5.22915 3.22824 6.58571 2.66634 8.0002 2.66634C9.41468 2.66634 10.7712 3.22824 11.7714 4.22844C12.7716 5.22863 13.3335 6.58519 13.3335 7.99967C13.3324 8.93732 13.0816 9.85774 12.6069 10.6663Z" fill="#898DA6" />
        </svg>
        Мой профиль
      </Link>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2668 8.4396C13.1599 8.31795 13.1009 8.16154 13.1009 7.9996C13.1009 7.83767 13.1599 7.68126 13.2668 7.5596L14.1201 6.5996C14.2141 6.49472 14.2725 6.36274 14.2869 6.22261C14.3013 6.08248 14.2709 5.9414 14.2001 5.8196L12.8668 3.51294C12.7967 3.39129 12.69 3.29486 12.5619 3.2374C12.4338 3.17993 12.2909 3.16438 12.1534 3.19294L10.9001 3.44627C10.7406 3.47922 10.5746 3.45266 10.4334 3.3716C10.2921 3.29055 10.1854 3.16059 10.1334 3.00627L9.72676 1.78627C9.68204 1.65386 9.59683 1.53885 9.48318 1.4575C9.36953 1.37615 9.23319 1.33258 9.09343 1.33294H6.42676C6.28138 1.32535 6.13752 1.36556 6.01714 1.44741C5.89676 1.52927 5.80648 1.64828 5.76009 1.78627L5.38676 3.00627C5.33476 3.16059 5.22808 3.29055 5.08684 3.3716C4.9456 3.45266 4.77957 3.47922 4.62009 3.44627L3.33343 3.19294C3.20313 3.17453 3.07029 3.19509 2.95166 3.25203C2.83302 3.30898 2.73389 3.39976 2.66676 3.51294L1.33343 5.8196C1.26087 5.94004 1.22824 6.08033 1.24022 6.22042C1.25219 6.36051 1.30815 6.49323 1.40009 6.5996L2.24676 7.5596C2.35364 7.68126 2.41258 7.83767 2.41258 7.9996C2.41258 8.16154 2.35364 8.31795 2.24676 8.4396L1.40009 9.3996C1.30815 9.50598 1.25219 9.6387 1.24022 9.77879C1.22824 9.91888 1.26087 10.0592 1.33343 10.1796L2.66676 12.4863C2.73683 12.6079 2.84351 12.7044 2.9716 12.7618C3.09968 12.8193 3.24264 12.8348 3.38009 12.8063L4.63343 12.5529C4.79291 12.52 4.95893 12.5465 5.10017 12.6276C5.24141 12.7087 5.34809 12.8386 5.40009 12.9929L5.80676 14.2129C5.85315 14.3509 5.94342 14.4699 6.0638 14.5518C6.18418 14.6337 6.32805 14.6739 6.47343 14.6663H9.14009C9.27986 14.6666 9.4162 14.6231 9.52985 14.5417C9.6435 14.4604 9.7287 14.3454 9.77343 14.2129L10.1801 12.9929C10.2321 12.8386 10.3388 12.7087 10.48 12.6276C10.6213 12.5465 10.7873 12.52 10.9468 12.5529L12.2001 12.8063C12.3375 12.8348 12.4805 12.8193 12.6086 12.7618C12.7367 12.7044 12.8434 12.6079 12.9134 12.4863L14.2468 10.1796C14.3175 10.0578 14.3479 9.91673 14.3336 9.7766C14.3192 9.63647 14.2608 9.50449 14.1668 9.3996L13.2668 8.4396ZM12.2734 9.33294L12.8068 9.93294L11.9534 11.4129L11.1668 11.2529C10.6866 11.1548 10.1871 11.2364 9.76316 11.4821C9.33917 11.7279 9.02019 12.1208 8.86676 12.5863L8.61343 13.3329H6.90676L6.66676 12.5729C6.51333 12.1075 6.19435 11.7146 5.77036 11.4688C5.34638 11.223 4.84691 11.1415 4.36676 11.2396L3.58009 11.3996L2.71343 9.92627L3.24676 9.32627C3.57473 8.95959 3.75605 8.48489 3.75605 7.99294C3.75605 7.50098 3.57473 7.02629 3.24676 6.6596L2.71343 6.0596L3.56676 4.59294L4.35343 4.75294C4.83357 4.85109 5.33305 4.76953 5.75703 4.52374C6.18101 4.27795 6.5 3.88504 6.65343 3.4196L6.90676 2.66627H8.61343L8.86676 3.42627C9.02019 3.89171 9.33917 4.28462 9.76316 4.5304C10.1871 4.77619 10.6866 4.85775 11.1668 4.7596L11.9534 4.5996L12.8068 6.0796L12.2734 6.67961C11.9491 7.04544 11.7701 7.51739 11.7701 8.00627C11.7701 8.49515 11.9491 8.9671 12.2734 9.33294ZM7.76009 5.33294C7.23268 5.33294 6.7171 5.48934 6.27857 5.78235C5.84004 6.07537 5.49825 6.49185 5.29641 6.97912C5.09458 7.46638 5.04177 8.00256 5.14467 8.51985C5.24756 9.03713 5.50154 9.51228 5.87448 9.88522C6.24742 10.2582 6.72257 10.5121 7.23985 10.615C7.75714 10.7179 8.29331 10.6651 8.78058 10.4633C9.26785 10.2614 9.68433 9.91966 9.97735 9.48112C10.2704 9.04259 10.4268 8.52702 10.4268 7.9996C10.4268 7.29236 10.1458 6.61408 9.64571 6.11399C9.14561 5.61389 8.46734 5.33294 7.76009 5.33294ZM7.76009 9.33294C7.49639 9.33294 7.2386 9.25474 7.01933 9.10823C6.80007 8.96172 6.62917 8.75348 6.52825 8.50985C6.42734 8.26621 6.40093 7.99813 6.45238 7.73948C6.50383 7.48084 6.63081 7.24327 6.81728 7.0568C7.00375 6.87033 7.24133 6.74334 7.49997 6.69189C7.75862 6.64044 8.0267 6.66685 8.27034 6.76777C8.51397 6.86868 8.72221 7.03958 8.86872 7.25884C9.01523 7.47811 9.09343 7.7359 9.09343 7.9996C9.09343 8.35323 8.95295 8.69237 8.7029 8.94241C8.45285 9.19246 8.11372 9.33294 7.76009 9.33294Z" fill="#898DA6" />
        </svg>
        Настройки
      </div>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.98 12.5471L14.3133 9.97376L12.2133 2.24709C12.168 2.07665 12.0569 1.93114 11.9044 1.84243C11.752 1.75371 11.5706 1.72902 11.4 1.77376L8.82 2.44043C8.75843 2.37219 8.68341 2.31742 8.59966 2.27956C8.51591 2.2417 8.42524 2.22157 8.33333 2.22043H1.66667C1.48986 2.22043 1.32029 2.29066 1.19526 2.41569C1.07024 2.54071 1 2.71028 1 2.88709V13.5538C1 13.7306 1.07024 13.9001 1.19526 14.0252C1.32029 14.1502 1.48986 14.2204 1.66667 14.2204H8.33333C8.51014 14.2204 8.67971 14.1502 8.80474 14.0252C8.92976 13.9001 9 13.7306 9 13.5538V8.22043L10.4667 13.7004C10.5057 13.8459 10.5929 13.9738 10.7139 14.0634C10.835 14.153 10.9828 14.1989 11.1333 14.1938C11.1909 14.2003 11.2491 14.2003 11.3067 14.1938L14.5267 13.3338C14.6118 13.311 14.6916 13.2716 14.7614 13.2178C14.8312 13.164 14.8896 13.0969 14.9333 13.0204C15.0037 12.8729 15.0202 12.7055 14.98 12.5471ZM4.31333 12.9138H2.31333V11.5804H4.31333V12.9138ZM4.31333 10.2471H2.31333V6.24709H4.31333V10.2471ZM4.31333 4.91376H2.31333V3.58043H4.31333V4.91376ZM7.64667 12.9138H5.64667V11.5804H7.64667V12.9138ZM7.64667 10.2471H5.64667V6.24709H7.64667V10.2471ZM7.64667 4.91376H5.64667V3.58043H7.64667V4.91376ZM9.14667 3.75376L11.08 3.23376L11.4267 4.52043L9.49333 5.04043L9.14667 3.75376ZM10.8733 10.1938L9.84 6.32709L11.7733 5.80709L12.8067 9.67376L10.8733 10.1938ZM11.54 12.7671L11.1933 11.4804L13.1267 10.9604L13.4733 12.2471L11.54 12.7671Z" fill="#898DA6" />
        </svg>
        Мои курсы
      </div>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6668 5.33301H12.0002V3.33301C12.0002 2.80257 11.7894 2.29387 11.4144 1.91879C11.0393 1.54372 10.5306 1.33301 10.0002 1.33301H3.3335C2.80306 1.33301 2.29436 1.54372 1.91928 1.91879C1.54421 2.29387 1.3335 2.80257 1.3335 3.33301V11.333C1.33415 11.4646 1.37375 11.5931 1.44731 11.7022C1.52087 11.8114 1.62508 11.8963 1.74683 11.9463C1.82595 11.9837 1.91271 12.0019 2.00016 11.9997C2.0879 12.0002 2.17488 11.9834 2.2561 11.9502C2.33733 11.917 2.4112 11.8681 2.4735 11.8063L4.34683 9.92634H5.3335V10.8863C5.3335 11.4168 5.54421 11.9255 5.91928 12.3006C6.29436 12.6756 6.80306 12.8863 7.3335 12.8863H11.9468L13.5268 14.473C13.5891 14.5348 13.663 14.5837 13.7442 14.6169C13.8254 14.65 13.9124 14.6668 14.0002 14.6663C14.0876 14.6686 14.1744 14.6503 14.2535 14.613C14.3752 14.563 14.4795 14.4781 14.553 14.3689C14.6266 14.2598 14.6662 14.1313 14.6668 13.9997V7.33301C14.6668 6.80258 14.4561 6.29387 14.081 5.91879C13.706 5.54372 13.1973 5.33301 12.6668 5.33301ZM5.3335 7.33301V8.59301H4.0735C3.98576 8.5925 3.89878 8.60932 3.81756 8.64249C3.73633 8.67567 3.66246 8.72455 3.60016 8.78634L2.66683 9.72634V3.33301C2.66683 3.1562 2.73707 2.98663 2.86209 2.8616C2.98712 2.73658 3.15669 2.66634 3.3335 2.66634H10.0002C10.177 2.66634 10.3465 2.73658 10.4716 2.8616C10.5966 2.98663 10.6668 3.1562 10.6668 3.33301V5.33301H7.3335C6.80306 5.33301 6.29436 5.54372 5.91928 5.91879C5.54421 6.29387 5.3335 6.80258 5.3335 7.33301ZM13.3335 12.393L12.6668 11.7263C12.6051 11.6633 12.5315 11.6132 12.4502 11.5789C12.369 11.5446 12.2817 11.5267 12.1935 11.5263H7.3335C7.15669 11.5263 6.98712 11.4561 6.86209 11.3311C6.73707 11.2061 6.66683 11.0365 6.66683 10.8597V7.33301C6.66683 7.1562 6.73707 6.98663 6.86209 6.8616C6.98712 6.73658 7.15669 6.66634 7.3335 6.66634H12.6668C12.8436 6.66634 13.0132 6.73658 13.1382 6.8616C13.2633 6.98663 13.3335 7.1562 13.3335 7.33301V12.393Z" fill="#898DA6" />
        </svg>
        Чаты
      </div>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3535 4.76667C14.2522 4.70815 14.1372 4.67735 14.0202 4.67735C13.9031 4.67735 13.7882 4.70815 13.6868 4.76667L11.3335 5.92667C11.3145 5.40905 11.0954 4.91898 10.7224 4.55963C10.3494 4.20027 9.85146 3.99965 9.3335 4H3.3335C2.80306 4 2.29436 4.21071 1.91928 4.58579C1.54421 4.96086 1.3335 5.46957 1.3335 6V10C1.3335 10.5304 1.54421 11.0391 1.91928 11.4142C2.29436 11.7893 2.80306 12 3.3335 12H9.3335C9.85146 12.0003 10.3494 11.7997 10.7224 11.4404C11.0954 11.081 11.3145 10.591 11.3335 10.0733L13.7068 11.26C13.7977 11.3066 13.8981 11.3317 14.0002 11.3333C14.125 11.3337 14.2474 11.2991 14.3535 11.2333C14.4496 11.1733 14.5288 11.0897 14.5836 10.9906C14.6384 10.8914 14.6671 10.78 14.6668 10.6667V5.33333C14.6671 5.22004 14.6384 5.10855 14.5836 5.0094C14.5288 4.91026 14.4496 4.82671 14.3535 4.76667ZM10.0002 10C10.0002 10.1768 9.92992 10.3464 9.8049 10.4714C9.67988 10.5964 9.51031 10.6667 9.3335 10.6667H3.3335C3.15669 10.6667 2.98712 10.5964 2.86209 10.4714C2.73707 10.3464 2.66683 10.1768 2.66683 10V6C2.66683 5.82319 2.73707 5.65362 2.86209 5.5286C2.98712 5.40357 3.15669 5.33333 3.3335 5.33333H9.3335C9.51031 5.33333 9.67988 5.40357 9.8049 5.5286C9.92992 5.65362 10.0002 5.82319 10.0002 6V10ZM13.3335 9.58667L11.3335 8.58667V7.41333L13.3335 6.41333V9.58667Z" fill="#898DA6" />
        </svg>
        Авторские
      </div>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9998 8.78634V6.66634C11.9989 5.72176 11.6637 4.80799 11.0536 4.08686C10.4435 3.36573 9.59788 2.88377 8.6665 2.72634V1.99967C8.6665 1.82286 8.59627 1.65329 8.47124 1.52827C8.34622 1.40325 8.17665 1.33301 7.99984 1.33301C7.82303 1.33301 7.65346 1.40325 7.52843 1.52827C7.40341 1.65329 7.33317 1.82286 7.33317 1.99967V2.72634C6.4018 2.88377 5.55619 3.36573 4.94609 4.08686C4.336 4.80799 4.00079 5.72176 3.99984 6.66634V8.78634C3.6108 8.92388 3.27384 9.17839 3.03513 9.51496C2.79642 9.85154 2.66766 10.2537 2.6665 10.6663V11.9997C2.6665 12.1765 2.73674 12.3461 2.86177 12.4711C2.98679 12.5961 3.15636 12.6663 3.33317 12.6663H5.4265C5.58003 13.2313 5.91517 13.73 6.38023 14.0855C6.8453 14.441 7.41443 14.6337 7.99984 14.6337C8.58524 14.6337 9.15438 14.441 9.61944 14.0855C10.0845 13.73 10.4196 13.2313 10.5732 12.6663H12.6665C12.8433 12.6663 13.0129 12.5961 13.1379 12.4711C13.2629 12.3461 13.3332 12.1765 13.3332 11.9997V10.6663C13.332 10.2537 13.2033 9.85154 12.9645 9.51496C12.7258 9.17839 12.3889 8.92388 11.9998 8.78634V8.78634ZM5.33317 6.66634C5.33317 5.9591 5.61412 5.28082 6.11422 4.78072C6.61432 4.28063 7.29259 3.99967 7.99984 3.99967C8.70708 3.99967 9.38536 4.28063 9.88546 4.78072C10.3856 5.28082 10.6665 5.9591 10.6665 6.66634V8.66634H5.33317V6.66634ZM7.99984 13.333C7.76715 13.3316 7.53889 13.2693 7.33772 13.1524C7.13656 13.0354 6.96951 12.8679 6.85317 12.6663H9.1465C9.03016 12.8679 8.86311 13.0354 8.66195 13.1524C8.46079 13.2693 8.23252 13.3316 7.99984 13.333ZM11.9998 11.333H3.99984V10.6663C3.99984 10.4895 4.07008 10.32 4.1951 10.1949C4.32012 10.0699 4.48969 9.99967 4.6665 9.99967H11.3332C11.51 9.99967 11.6796 10.0699 11.8046 10.1949C11.9296 10.32 11.9998 10.4895 11.9998 10.6663V11.333Z" fill="#898DA6" />
        </svg>
        Уведомление
      </div>
      <div className="side__menu-item">
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0002 9.33301H13.3335V2.66634H14.0002C14.177 2.66634 14.3465 2.5961 14.4716 2.47108C14.5966 2.34605 14.6668 2.17649 14.6668 1.99967C14.6668 1.82286 14.5966 1.65329 14.4716 1.52827C14.3465 1.40325 14.177 1.33301 14.0002 1.33301H2.00016C1.82335 1.33301 1.65378 1.40325 1.52876 1.52827C1.40373 1.65329 1.3335 1.82286 1.3335 1.99967C1.3335 2.17649 1.40373 2.34605 1.52876 2.47108C1.65378 2.5961 1.82335 2.66634 2.00016 2.66634H2.66683V9.33301H2.00016C1.82335 9.33301 1.65378 9.40325 1.52876 9.52827C1.40373 9.65329 1.3335 9.82286 1.3335 9.99967C1.3335 10.1765 1.40373 10.3461 1.52876 10.4711C1.65378 10.5961 1.82335 10.6663 2.00016 10.6663H7.3335V11.433L4.30016 13.433C4.17572 13.51 4.08008 13.6259 4.02801 13.7627C3.97593 13.8994 3.97032 14.0496 4.01203 14.1898C4.05373 14.3301 4.14045 14.4528 4.25879 14.5389C4.37713 14.625 4.52051 14.6698 4.66683 14.6663C4.7979 14.6678 4.92613 14.6282 5.0335 14.553L7.3335 13.033V13.9997C7.3335 14.1765 7.40373 14.3461 7.52876 14.4711C7.65378 14.5961 7.82335 14.6663 8.00016 14.6663C8.17697 14.6663 8.34654 14.5961 8.47157 14.4711C8.59659 14.3461 8.66683 14.1765 8.66683 13.9997V13.033L10.9668 14.553C11.0742 14.6282 11.2024 14.6678 11.3335 14.6663C11.4759 14.6652 11.6143 14.6186 11.7282 14.5331C11.8422 14.4477 11.9258 14.328 11.9668 14.1916C12.0078 14.0552 12.004 13.9092 11.956 13.7751C11.9081 13.641 11.8184 13.5258 11.7002 13.4463L8.66683 11.4463V10.6663H14.0002C14.177 10.6663 14.3465 10.5961 14.4716 10.4711C14.5966 10.3461 14.6668 10.1765 14.6668 9.99967C14.6668 9.82286 14.5966 9.65329 14.4716 9.52827C14.3465 9.40325 14.177 9.33301 14.0002 9.33301ZM12.0002 9.33301H4.00016V2.66634H12.0002V9.33301ZM6.40683 8.17301C6.58452 8.27799 6.78712 8.33337 6.9935 8.33337C7.19988 8.33337 7.40248 8.27799 7.58016 8.17301L9.58016 7.01301C9.75114 6.90807 9.89236 6.76104 9.99032 6.58596C10.0883 6.41089 10.1397 6.21363 10.1397 6.01301C10.1397 5.81239 10.0883 5.61512 9.99032 5.44005C9.89236 5.26498 9.75114 5.11795 9.58016 5.01301L7.58016 3.85301C7.40248 3.74803 7.19988 3.69265 6.9935 3.69265C6.78712 3.69265 6.58452 3.74803 6.40683 3.85301C6.22778 3.95394 6.07935 4.1014 5.97725 4.27979C5.87515 4.45817 5.82318 4.66084 5.82683 4.86634V7.18634C5.82794 7.38733 5.88218 7.58446 5.98404 7.75774C6.08589 7.93101 6.23175 8.07428 6.40683 8.17301ZM7.16016 5.11967L8.66683 5.99967L7.14683 6.87967L7.16016 5.11967Z" fill="#898DA6" />
      </svg>
      Вебинары
      </div>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9135 11.5L12.1069 8.38C12.4766 7.701 12.6692 6.93978 12.6669 6.16667C12.6669 4.92899 12.1752 3.742 11.3 2.86683C10.4249 1.99167 9.23789 1.5 8.00021 1.5C6.76254 1.5 5.57555 1.99167 4.70038 2.86683C3.82521 3.742 3.33354 4.92899 3.33354 6.16667C3.33125 6.93978 3.52385 7.701 3.89354 8.38L2.08688 11.5C2.02825 11.6015 1.99744 11.7167 1.99756 11.834C1.99767 11.9512 2.02871 12.0664 2.08754 12.1678C2.14636 12.2692 2.2309 12.3534 2.33262 12.4117C2.43433 12.47 2.54963 12.5005 2.66688 12.5H4.58021L5.55354 14.14C5.58636 14.1944 5.62677 14.2437 5.67354 14.2867C5.79713 14.4058 5.9619 14.4726 6.13354 14.4733H6.22688C6.32752 14.4596 6.42369 14.423 6.50804 14.3664C6.59238 14.3097 6.66267 14.2346 6.71354 14.1467L8.00021 11.9333L9.28688 14.1667C9.3385 14.2534 9.40912 14.3272 9.49342 14.3826C9.57772 14.4381 9.6735 14.4736 9.77355 14.4867H9.86688C10.0408 14.4877 10.2083 14.4207 10.3335 14.3C10.3784 14.2595 10.4166 14.2123 10.4469 14.16L11.4202 12.52H13.3335C13.451 12.5205 13.5665 12.4899 13.6684 12.4313C13.7702 12.3728 13.8548 12.2884 13.9135 12.1867C13.9758 12.083 14.0088 11.9643 14.0088 11.8433C14.0088 11.7224 13.9758 11.6037 13.9135 11.5ZM6.12688 12.52L5.53355 11.5267C5.47512 11.4281 5.39228 11.3463 5.29303 11.2891C5.19377 11.2318 5.08144 11.2012 4.96688 11.2H3.81354L4.76688 9.54667C5.42336 10.1793 6.25076 10.6057 7.14688 10.7733L6.12688 12.52ZM8.00021 9.5C7.34094 9.5 6.69647 9.3045 6.14831 8.93823C5.60015 8.57196 5.17291 8.05136 4.92061 7.44228C4.66832 6.83319 4.60231 6.16297 4.73093 5.51637C4.85954 4.86976 5.17701 4.27582 5.64319 3.80964C6.10936 3.34347 6.70331 3.026 7.34991 2.89738C7.99651 2.76877 8.66674 2.83478 9.27582 3.08707C9.88491 3.33936 10.4055 3.7666 10.7718 4.31477C11.138 4.86293 11.3335 5.5074 11.3335 6.16667C11.3335 7.05072 10.9824 7.89857 10.3572 8.52369C9.73211 9.14881 8.88427 9.5 8.00021 9.5ZM11.0335 11.2C10.919 11.2012 10.8067 11.2318 10.7074 11.2891C10.6081 11.3463 10.5253 11.4281 10.4669 11.5267L9.87355 12.52L8.86021 10.7533C9.7532 10.5823 10.5775 10.1562 11.2335 9.52667L12.1869 11.18L11.0335 11.2Z" fill="#898DA6" />
        </svg>
        Сертификаты
      </div>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.66683 10.667H4.66683C4.49002 10.667 4.32045 10.7373 4.19543 10.8623C4.07041 10.9873 4.00017 11.1569 4.00017 11.3337C4.00017 11.5105 4.07041 11.6801 4.19543 11.8051C4.32045 11.9301 4.49002 12.0004 4.66683 12.0004H8.66683C8.84365 12.0004 9.01322 11.9301 9.13824 11.8051C9.26326 11.6801 9.3335 11.5105 9.3335 11.3337C9.3335 11.1569 9.26326 10.9873 9.13824 10.8623C9.01322 10.7373 8.84365 10.667 8.66683 10.667ZM6.00017 6.66704H7.3335C7.51031 6.66704 7.67988 6.5968 7.80491 6.47178C7.92993 6.34675 8.00017 6.17718 8.00017 6.00037C8.00017 5.82356 7.92993 5.65399 7.80491 5.52897C7.67988 5.40394 7.51031 5.3337 7.3335 5.3337H6.00017C5.82336 5.3337 5.65379 5.40394 5.52876 5.52897C5.40374 5.65399 5.3335 5.82356 5.3335 6.00037C5.3335 6.17718 5.40374 6.34675 5.52876 6.47178C5.65379 6.5968 5.82336 6.66704 6.00017 6.66704ZM14.0002 8.00037H12.0002V2.00037C12.0006 1.8829 11.9701 1.76739 11.9115 1.66554C11.853 1.56368 11.7686 1.47911 11.6668 1.42037C11.5655 1.36186 11.4505 1.33105 11.3335 1.33105C11.2165 1.33105 11.1015 1.36186 11.0002 1.42037L9.00017 2.56704L7.00017 1.42037C6.89882 1.36186 6.78386 1.33105 6.66683 1.33105C6.54981 1.33105 6.43485 1.36186 6.3335 1.42037L4.3335 2.56704L2.3335 1.42037C2.23216 1.36186 2.11719 1.33105 2.00017 1.33105C1.88314 1.33105 1.76818 1.36186 1.66683 1.42037C1.5651 1.47911 1.48069 1.56368 1.42215 1.66554C1.36362 1.76739 1.33303 1.8829 1.3335 2.00037V12.667C1.3335 13.1975 1.54422 13.7062 1.91929 14.0813C2.29436 14.4563 2.80307 14.667 3.3335 14.667H12.6668C13.1973 14.667 13.706 14.4563 14.081 14.0813C14.4561 13.7062 14.6668 13.1975 14.6668 12.667V8.66704C14.6668 8.49023 14.5966 8.32066 14.4716 8.19563C14.3465 8.07061 14.177 8.00037 14.0002 8.00037ZM3.3335 13.3337C3.15669 13.3337 2.98712 13.2635 2.8621 13.1384C2.73707 13.0134 2.66683 12.8438 2.66683 12.667V3.1537L4.00017 3.9137C4.10306 3.96745 4.21742 3.99551 4.3335 3.99551C4.44958 3.99551 4.56394 3.96745 4.66683 3.9137L6.66683 2.76704L8.66683 3.9137C8.76973 3.96745 8.88409 3.99551 9.00017 3.99551C9.11625 3.99551 9.23061 3.96745 9.3335 3.9137L10.6668 3.1537V12.667C10.6686 12.8945 10.7092 13.1199 10.7868 13.3337H3.3335ZM13.3335 12.667C13.3335 12.8438 13.2633 13.0134 13.1382 13.1384C13.0132 13.2635 12.8436 13.3337 12.6668 13.3337C12.49 13.3337 12.3205 13.2635 12.1954 13.1384C12.0704 13.0134 12.0002 12.8438 12.0002 12.667V9.3337H13.3335V12.667ZM8.66683 8.00037H4.66683C4.49002 8.00037 4.32045 8.07061 4.19543 8.19563C4.07041 8.32066 4.00017 8.49023 4.00017 8.66704C4.00017 8.84385 4.07041 9.01342 4.19543 9.13844C4.32045 9.26347 4.49002 9.3337 4.66683 9.3337H8.66683C8.84365 9.3337 9.01322 9.26347 9.13824 9.13844C9.26326 9.01342 9.3335 8.84385 9.3335 8.66704C9.3335 8.49023 9.26326 8.32066 9.13824 8.19563C9.01322 8.07061 8.84365 8.00037 8.66683 8.00037Z" fill="#898DA6" />
        </svg>
        История оплат
      </div>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.52683 10.193C7.49816 10.2247 7.47145 10.2581 7.44683 10.293C7.4216 10.3302 7.40142 10.3705 7.38683 10.413C7.36761 10.4508 7.35413 10.4912 7.34683 10.533C7.34356 10.5774 7.34356 10.622 7.34683 10.6663C7.34458 10.7538 7.36284 10.8406 7.40017 10.9197C7.43011 11.0024 7.47788 11.0775 7.54009 11.1398C7.6023 11.202 7.67744 11.2497 7.76017 11.2797C7.83997 11.3149 7.92625 11.3332 8.0135 11.3332C8.10075 11.3332 8.18703 11.3149 8.26683 11.2797C8.34956 11.2497 8.4247 11.202 8.48691 11.1398C8.54912 11.0775 8.59689 11.0024 8.62683 10.9197C8.65644 10.8386 8.67002 10.7526 8.66683 10.6663C8.66734 10.5786 8.65052 10.4916 8.61735 10.4104C8.58417 10.3292 8.53529 10.2553 8.4735 10.193C8.41152 10.1305 8.33779 10.0809 8.25655 10.0471C8.17531 10.0132 8.08817 9.99581 8.00017 9.99581C7.91216 9.99581 7.82502 10.0132 7.74378 10.0471C7.66254 10.0809 7.58881 10.1305 7.52683 10.193ZM8.00017 1.33301C6.68162 1.33301 5.39269 1.724 4.29636 2.45654C3.20004 3.18909 2.34555 4.23028 1.84097 5.44845C1.33638 6.66663 1.20436 8.00707 1.4616 9.30028C1.71883 10.5935 2.35377 11.7814 3.28612 12.7137C4.21847 13.6461 5.40636 14.281 6.69956 14.5382C7.99277 14.7955 9.33321 14.6635 10.5514 14.1589C11.7696 13.6543 12.8108 12.7998 13.5433 11.7035C14.2758 10.6071 14.6668 9.31822 14.6668 7.99967C14.6668 7.1242 14.4944 6.25729 14.1594 5.44845C13.8243 4.63961 13.3333 3.90469 12.7142 3.28563C12.0952 2.66657 11.3602 2.17551 10.5514 1.84048C9.74255 1.50545 8.87564 1.33301 8.00017 1.33301ZM8.00017 13.333C6.94533 13.333 5.91419 13.0202 5.03712 12.4342C4.16006 11.8481 3.47648 11.0152 3.07281 10.0407C2.66914 9.06611 2.56352 7.99376 2.76931 6.95919C2.9751 5.92463 3.48305 4.97432 4.22893 4.22844C4.97481 3.48256 5.92512 2.97461 6.95968 2.76882C7.99425 2.56303 9.0666 2.66865 10.0411 3.07232C11.0157 3.47598 11.8486 4.15957 12.4347 5.03663C13.0207 5.9137 13.3335 6.94484 13.3335 7.99967C13.3335 9.41416 12.7716 10.7707 11.7714 11.7709C10.7712 12.7711 9.41465 13.333 8.00017 13.333ZM8.00017 4.66634C7.64887 4.66612 7.30372 4.75842 6.99944 4.93397C6.69516 5.10952 6.44248 5.36211 6.26683 5.66634C6.2186 5.74222 6.18621 5.82707 6.17162 5.91579C6.15702 6.00451 6.16053 6.09527 6.18192 6.1826C6.20331 6.26993 6.24214 6.35203 6.29609 6.42396C6.35003 6.4959 6.41797 6.55617 6.49581 6.60117C6.57366 6.64617 6.6598 6.67495 6.74905 6.68579C6.83831 6.69664 6.92884 6.68931 7.01519 6.66426C7.10154 6.63921 7.18193 6.59695 7.25153 6.54002C7.32113 6.48309 7.37849 6.41268 7.42017 6.33301C7.4789 6.23127 7.56348 6.14686 7.66533 6.08833C7.76718 6.02979 7.88269 5.99921 8.00017 5.99967C8.17698 5.99967 8.34655 6.06991 8.47157 6.19494C8.59659 6.31996 8.66683 6.48953 8.66683 6.66634C8.66683 6.84315 8.59659 7.01272 8.47157 7.13775C8.34655 7.26277 8.17698 7.33301 8.00017 7.33301C7.82335 7.33301 7.65379 7.40325 7.52876 7.52827C7.40374 7.65329 7.3335 7.82286 7.3335 7.99967V8.66634C7.3335 8.84315 7.40374 9.01272 7.52876 9.13775C7.65379 9.26277 7.82335 9.33301 8.00017 9.33301C8.17698 9.33301 8.34655 9.26277 8.47157 9.13775C8.59659 9.01272 8.66683 8.84315 8.66683 8.66634V8.54634C9.10775 8.38635 9.4784 8.07649 9.71401 7.67092C9.94962 7.26535 10.0352 6.78987 9.95576 6.3276C9.87634 5.86533 9.63697 5.44569 9.27949 5.14202C8.92202 4.83835 8.46919 4.66998 8.00017 4.66634Z" fill="#898DA6" />
        </svg>
        Вопросы/Ответы
      </div>
      <div className="side__menu-item">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.6065 8.66641L9.13984 10.1931C9.20232 10.255 9.25192 10.3288 9.28576 10.41C9.31961 10.4913 9.33704 10.5784 9.33704 10.6664C9.33704 10.7544 9.31961 10.8416 9.28576 10.9228C9.25192 11.004 9.20232 11.0778 9.13984 11.1397C9.07786 11.2022 9.00413 11.2518 8.92289 11.2857C8.84165 11.3195 8.75451 11.3369 8.6665 11.3369C8.5785 11.3369 8.49136 11.3195 8.41012 11.2857C8.32888 11.2518 8.25515 11.2022 8.19317 11.1397L5.5265 8.47307C5.46581 8.40967 5.41823 8.33491 5.3865 8.25307C5.31983 8.09077 5.31983 7.90872 5.3865 7.74641C5.41823 7.66457 5.46581 7.58981 5.5265 7.52641L8.19317 4.85974C8.25533 4.79758 8.32912 4.74827 8.41034 4.71463C8.49155 4.68099 8.5786 4.66368 8.6665 4.66368C8.75441 4.66368 8.84146 4.68099 8.92267 4.71463C9.00388 4.74827 9.07768 4.79758 9.13984 4.85974C9.202 4.9219 9.2513 4.99569 9.28494 5.07691C9.31858 5.15812 9.3359 5.24517 9.3359 5.33307C9.3359 5.42098 9.31858 5.50803 9.28494 5.58924C9.2513 5.67046 9.202 5.74425 9.13984 5.80641L7.6065 7.33307H13.9998C14.1766 7.33307 14.3462 7.40331 14.4712 7.52834C14.5963 7.65336 14.6665 7.82293 14.6665 7.99974C14.6665 8.17655 14.5963 8.34612 14.4712 8.47115C14.3462 8.59617 14.1766 8.66641 13.9998 8.66641H7.6065ZM7.99984 1.33307C9.24578 1.32751 10.4683 1.67122 11.5289 2.3252C12.5894 2.97919 13.4454 3.91728 13.9998 5.03307C14.0794 5.1922 14.0925 5.37642 14.0362 5.54521C13.98 5.71399 13.859 5.85351 13.6998 5.93307C13.5407 6.01264 13.3565 6.02573 13.1877 5.96947C13.0189 5.91321 12.8794 5.7922 12.7998 5.63307C12.3784 4.78196 11.7373 4.05882 10.9428 3.5384C10.1483 3.01798 9.22929 2.71915 8.28067 2.6728C7.33204 2.62645 6.38825 2.83426 5.54682 3.27475C4.7054 3.71524 3.99686 4.37243 3.49443 5.1784C2.992 5.98438 2.71391 6.90991 2.6889 7.85933C2.66389 8.80876 2.89286 9.74764 3.35216 10.5789C3.81145 11.4103 4.48441 12.1038 5.30148 12.588C6.11855 13.0722 7.05009 13.3294 7.99984 13.3331C8.99392 13.3374 9.96907 13.0613 10.8134 12.5366C11.6577 12.0118 12.3369 11.2597 12.7732 10.3664C12.8527 10.2073 12.9923 10.0863 13.161 10.03C13.3298 9.97375 13.514 9.98684 13.6732 10.0664C13.8323 10.146 13.9533 10.2855 14.0096 10.4543C14.0658 10.6231 14.0527 10.8073 13.9732 10.9664C13.4446 12.0301 12.6415 12.9332 11.6469 13.5824C10.6522 14.2316 9.50221 14.6033 8.31576 14.6591C7.12931 14.7148 5.94951 14.4525 4.89841 13.8994C3.8473 13.3463 2.96305 12.5224 2.33712 11.513C1.7112 10.5035 1.36632 9.34517 1.33817 8.15774C1.31002 6.97032 1.59962 5.79694 2.17701 4.75896C2.7544 3.72099 3.59861 2.85612 4.62232 2.25381C5.64604 1.6515 6.81208 1.33363 7.99984 1.33307Z" fill="#898DA6" />
        </svg>
        Выйти
      </div>
    </aside>
  )
}

export default SideMenu