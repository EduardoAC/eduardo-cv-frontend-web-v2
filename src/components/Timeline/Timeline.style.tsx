import { makeStyles, Theme, createStyles } from '@material-ui/core';
import ArrowLeft from '../../../public/assets/images/arrow-left.png';

export const useTimelineStyles = makeStyles((theme: Theme) =>
  createStyles({
    experienceBlock: {
      paddingBottom: '20px',
      marginBottom: '20px',
      borderBottom: '1px solid #dadada',
      [theme.breakpoints.up('sm')]: {
        paddingBottom: 0,
        marginBottom: 0,
        borderBottom: 0,
        '& p': {
          fontSize: '18px',
        },
      },
    },
    companyTitle: {
      color: '#f8f7f8',
      paddingBottom: '1px',
      fontWeight: 700,
      fontSize: '24px',
      marginLeft: '15px',
      marginBottom: '5px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: '0',
      },
    },
    workRole: {
      color: '#f8f7f8',
      fontSize: '20px',
      fontWeight: 400,
      margin: '0 0 0 15px',
      paddingBottom: '11px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: 0,
      },
    },

    workYear: {
      fontSize: '17px',
      color: '#fff',
      lineHeight: '40px',
      '& span': {
        display: 'block',
        fontSize: '18px',
        padding: '0 21px',
        marginBottom: '2px',
        fontWeight: 'bold',
      },
      [theme.breakpoints.up('sm')]: {
        '& span': {
          float: 'right',
          marginBottom: '2px',
          marginRight: '12px',
        },
      },
      [theme.breakpoints.up('md')]: {
        '& span': {
          marginRight: '28px',
          whiteSpace: 'nowrap',
        },
      },
    },

    prevY: {
      backgroundColor: '#047ca0',
    },

    description: {
      '& a': {
        color: '#f8f7f8 !important',
        textDecoration: 'underline',
      },
    },
    afterY: {
      backgroundColor: '#483c49',
    },
    exCon: {
      '& p': {
        color: '#f8f7f8',
        fontSize: '18px',
        fontWeight: '400',
        paddingBottom: '15px',
        margin: 0,
      },
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
        padding: '0 15px 6px 15px',
        marginLeft: '15px',
        textAlign: 'left',
        '& h4': {
          marginTop: '-8px',
        },
        '& p:last-child': {
          paddingBottom: 0,
        },
      },
      [theme.breakpoints.up('md')]: {
        padding: '0 47px 6px 70px',
      },
    },
    rightArea: {
      [theme.breakpoints.up('sm')]: {
        borderLeft: 'dashed 1px #897f8a',
        paddingBottom: '47px',
        '& :last-child': {
          paddingBottom: '0px',
        },
      },
    },

    arrowpart: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: '-12px',
        marginTop: '32px',
        float: 'left',
        width: '22px',
        height: '22px',
        background: `url(${ArrowLeft}) no-repeat 0 0`,
      },
    },
  }),
);
