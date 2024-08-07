import PageBreadcrumb from '@components/commons/PageBreadcrumb';
import PoliciesContent from '@components/information/PoliciesContent';
import { Container } from '@mui/material';
import React from 'react';

const CRUMBS = [
  {
    text: 'Sistema de Indicadores del PDUCP'
  }
]
const policies = () => {
  return (
    <Container>
      <PageBreadcrumb crumbs={CRUMBS} />
      <PoliciesContent />
    </Container>
  );
};

export default policies;