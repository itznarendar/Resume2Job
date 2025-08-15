import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useComponentGenerator } from '../useComponentGenerator';

describe('useComponentGenerator', () => {
  it('should have initial state', () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    expect(result.current.generatedCode).toBe('');
    expect(result.current.isGenerating).toBe(false);
    expect(result.current.error).toBe(null);
    expect(typeof result.current.generateComponent).toBe('function');
  });

  it('should generate button component code', async () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    await act(async () => {
      result.current.generateComponent({
        type: 'button',
        name: 'MyButton',
        props: {}
      });
    });

    await waitFor(() => {
      expect(result.current.isGenerating).toBe(false);
    });

    expect(result.current.generatedCode).toContain('interface MyButtonProps');
    expect(result.current.generatedCode).toContain('export const MyButton: React.FC<MyButtonProps>');
    expect(result.current.generatedCode).toContain('variant?:');
    expect(result.current.generatedCode).toContain('size?:');
    expect(result.current.generatedCode).toContain('onClick?:');
    expect(result.current.error).toBe(null);
  });

  it('should generate card component code', async () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    await act(async () => {
      result.current.generateComponent({
        type: 'card',
        name: 'MyCard',
        props: {}
      });
    });

    await waitFor(() => {
      expect(result.current.isGenerating).toBe(false);
    });

    expect(result.current.generatedCode).toContain('interface MyCardProps');
    expect(result.current.generatedCode).toContain('export const MyCard: React.FC<MyCardProps>');
    expect(result.current.generatedCode).toContain('title?:');
    expect(result.current.generatedCode).toContain('content?:');
    expect(result.current.error).toBe(null);
  });

  it('should generate input component code', async () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    await act(async () => {
      result.current.generateComponent({
        type: 'input',
        name: 'MyInput',
        props: {}
      });
    });

    await waitFor(() => {
      expect(result.current.isGenerating).toBe(false);
    });

    expect(result.current.generatedCode).toContain('interface MyInputProps');
    expect(result.current.generatedCode).toContain('export const MyInput: React.FC<MyInputProps>');
    expect(result.current.generatedCode).toContain('type?:');
    expect(result.current.generatedCode).toContain('placeholder?:');
    expect(result.current.generatedCode).toContain('onChange?:');
    expect(result.current.error).toBe(null);
  });

  it('should generate modal component code', async () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    await act(async () => {
      result.current.generateComponent({
        type: 'modal',
        name: 'MyModal',
        props: {}
      });
    });

    await waitFor(() => {
      expect(result.current.isGenerating).toBe(false);
    });

    expect(result.current.generatedCode).toContain('interface MyModalProps');
    expect(result.current.generatedCode).toContain('export const MyModal: React.FC<MyModalProps>');
    expect(result.current.generatedCode).toContain('isOpen: boolean');
    expect(result.current.generatedCode).toContain('onClose: () => void');
    expect(result.current.error).toBe(null);
  });

  it('should generate default component for unknown types', async () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    await act(async () => {
      result.current.generateComponent({
        type: 'unknown',
        name: 'MyComponent',
        props: {}
      });
    });

    await waitFor(() => {
      expect(result.current.isGenerating).toBe(false);
    });

    expect(result.current.generatedCode).toContain('interface MyComponentProps');
    expect(result.current.generatedCode).toContain('export const MyComponent: React.FC<MyComponentProps>');
    expect(result.current.generatedCode).toContain('<div className={cn(\'p-4\', className)}');
    expect(result.current.error).toBe(null);
  });

  it('should set isGenerating to true during generation', async () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    act(() => {
      result.current.generateComponent({
        type: 'button',
        name: 'MyButton',
        props: {}
      });
    });

    expect(result.current.isGenerating).toBe(true);

    await waitFor(() => {
      expect(result.current.isGenerating).toBe(false);
    });
  });

  it('should include usage examples in generated code', async () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    await act(async () => {
      result.current.generateComponent({
        type: 'button',
        name: 'MyButton',
        props: {}
      });
    });

    await waitFor(() => {
      expect(result.current.isGenerating).toBe(false);
    });

    expect(result.current.generatedCode).toContain('// Usage Example:');
    expect(result.current.generatedCode).toContain('<MyButton');
    expect(result.current.generatedCode).toContain('</MyButton>');
  });

  it('should include proper imports in generated code', async () => {
    const { result } = renderHook(() => useComponentGenerator());
    
    await act(async () => {
      result.current.generateComponent({
        type: 'button',
        name: 'MyButton',
        props: {}
      });
    });

    await waitFor(() => {
      expect(result.current.isGenerating).toBe(false);
    });

    expect(result.current.generatedCode).toContain('import React from \'react\';');
    expect(result.current.generatedCode).toContain('import { cn } from \'@/lib/utils\';');
  });
});
