import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComponentPreview } from '../ComponentPreview';

describe('ComponentPreview', () => {
  const defaultProps = {
    componentType: 'button',
    componentName: 'TestButton',
    props: {},
    device: 'desktop' as const
  };

  it('renders button component preview correctly', () => {
    render(<ComponentPreview {...defaultProps} />);
    
    expect(screen.getByText('TestButton')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(screen.getByText('Preview - desktop view')).toBeInTheDocument();
  });

  it('renders card component preview correctly', () => {
    render(
      <ComponentPreview 
        {...defaultProps} 
        componentType="card"
        props={{ title: 'Test Card', content: 'Test content' }}
      />
    );
    
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders input component preview correctly', () => {
    render(
      <ComponentPreview 
        {...defaultProps} 
        componentType="input"
        props={{ label: 'Test Input', placeholder: 'Enter test...' }}
      />
    );
    
    expect(screen.getByText('Test Input')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter test...')).toBeInTheDocument();
  });

  it('renders modal component preview correctly', () => {
    render(
      <ComponentPreview 
        {...defaultProps} 
        componentType="modal"
        props={{ title: 'Test Modal', content: 'Modal content' }}
      />
    );
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('renders form component preview correctly', () => {
    render(<ComponentPreview {...defaultProps} componentType="form" />);
    
    expect(screen.getByText('Sample Form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('renders navbar component preview correctly', () => {
    render(
      <ComponentPreview 
        {...defaultProps} 
        componentType="navbar"
        props={{ brand: 'Test Brand' }}
      />
    );
    
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('applies correct device classes', () => {
    const { rerender } = render(
      <ComponentPreview {...defaultProps} device="mobile" />
    );
    
    expect(screen.getByText('Preview - mobile view')).toBeInTheDocument();
    
    rerender(<ComponentPreview {...defaultProps} device="tablet" />);
    expect(screen.getByText('Preview - tablet view')).toBeInTheDocument();
    
    rerender(<ComponentPreview {...defaultProps} device="desktop" />);
    expect(screen.getByText('Preview - desktop view')).toBeInTheDocument();
  });

  it('shows fallback for unknown component type', () => {
    render(
      <ComponentPreview 
        {...defaultProps} 
        componentType="unknown" 
      />
    );
    
    expect(screen.getByText('Select a component type to see the preview')).toBeInTheDocument();
  });
});
