import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: React.SFC<BaseLayoutProps> = ({
  children,
}: BaseLayoutProps) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);
